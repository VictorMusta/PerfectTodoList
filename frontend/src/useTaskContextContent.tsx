import React from 'react';
import Task from './types/Task/Task';
import TaskRef from './types/Task/TaskRef';
import google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb.js';
import { CreateTaskRefRequest, DeleteTaskRefRequest, UpdateTaskRefRequest } from './protos/protostubs/TaskRef_pb';
import { TaskRefServiceClient } from './protos/protostubs/TaskRefServiceClientPb';
import { TaskServiceClient } from './protos/protostubs/TaskServiceClientPb';
import { CreateTaskRequest, UpdateTaskRequest } from './protos/protostubs/Task_pb';

export const useTaskContextContent = () => {
    const [tasks, setTasks] = React.useState(new Map<string, Task>());
    const [taskRefs, setTaskRefs] = React.useState(new Map<string, TaskRef>());

    let taskService = new TaskServiceClient("http://localhost:10000");
    let taskRefService = new TaskRefServiceClient("http://localhost:10000");

    const getAllTasks = React.useCallback(() => {
        setTasks(new Map());
        let empty = new google_protobuf_empty_pb.Empty();

        taskService.get_all_tasks(empty, {}, function (err: any, response: any) {
            if (err) {
                console.log(err.code);
                console.log(err.message);
            } else {
                response.getTasksList().forEach((task: any) => {
                    let tempTask: Task = { idTask: task.array[0], title: task.array[1], color: task.array[2], resolved: task.array[3] ? task.array[3] : false };
                    setTasks(new Map(tasks.set(tempTask.idTask, tempTask)));
                });

            }
        });

    }, [taskService, tasks]);
    const getAllTaskRefs = React.useCallback(() => {
        setTaskRefs(new Map());
        let empty = new google_protobuf_empty_pb.Empty();
        taskRefService.get_all_task_refs(empty, {}, function (err: any, response: any) {
            if (err) {
                console.log(err.code);
                console.log(err.message);
            } else {
                response.getTaskRefsList().forEach((taskRef: any) => {
                    let myTask = tasks.get(taskRef.array[1]);
                    if (myTask) {
                        if (taskRefs.get(taskRef.array[0])?.selected === true) {
                            let tempTaskRef: TaskRef = {
                                idTaskRef: taskRef.array[0], task: myTask, idList: taskRef.array[2], selected: true
                            };
                            setTaskRefs(new Map(taskRefs.set(tempTaskRef.idTaskRef, tempTaskRef)));
                        } else {
                            let tempTaskRef: TaskRef = {
                                idTaskRef: taskRef.array[0], task: myTask, idList: taskRef.array[2], selected: false
                            };
                            setTaskRefs(new Map(taskRefs.set(tempTaskRef.idTaskRef, tempTaskRef)));
                        }
                    }
                });
            }
        });

    }, [taskRefService, taskRefs, tasks]);
    const getDatas = React.useCallback(() => {
        getAllTasks();
        getAllTaskRefs();
    }, [getAllTaskRefs, getAllTasks]);

    const createNewTaskRef = React.useCallback((idTask: string, idList: number) => {
        let request = new CreateTaskRefRequest();
        request.setIdTask(idTask);
        request.setIdList(idList);
        taskRefService.create_task_ref(request, {}, function (err: any, response: any) {
            if (err) {
                console.log(err.code);
                console.log(err.message);
            }
        });
        getDatas();
    }, [getDatas, taskRefService]);

    const createNewTask = React.useCallback((title: string, idList: number) => {
        let request = new CreateTaskRequest();
        request.setTitle(title);
        taskService.create_task(request, {}, function (err: any, response: any) {
            if (err) {
                console.log(err.code);
                console.log(err.message);
            }
            createNewTaskRef(response.getIdTask(), idList);
        });
    }, [createNewTaskRef, taskService]);

    const deleteSelectedTaskRefs
        = React.useCallback((idList: number) => {
            let request = new DeleteTaskRefRequest();
            taskRefs.forEach(taskRef => {
                if (taskRef.selected === true && taskRef.idList === idList) {
                    request.setIdTaskRef(taskRef.idTaskRef);
                    taskRefService.delete_task_ref(request, {}, function (err: any, response: any) {
                        if (err) {
                            console.log(err.code);
                            console.log(err.message);
                        }
                    });
                }
            });
            getDatas();
        }, [getDatas, taskRefService, taskRefs]);


    const deleteAllTasks = React.useCallback(() => {
        let empty = new google_protobuf_empty_pb.Empty();

        taskService.delete_all_tasks(empty, {}, function (err: any, response: any) {
            if (err) {
                console.log(err.code);
                console.log(err.message);
            }
        });
        getDatas();

    }, [getDatas, taskService]);

    const selectTaskRef = React.useCallback((taskRef: TaskRef) => {
        taskRef.selected = !taskRef.selected;
        setTaskRefs(new Map(taskRefs.set(taskRef.idTaskRef, taskRef)));

    }, [taskRefs]);

    const moveSelectedTasks = React.useCallback((idList: number) => {

        taskRefs.forEach(taskRef => {
            if (taskRef.selected === true) {
                if (idList === 1) {
                    let request = new UpdateTaskRefRequest();
                    request.setIdTaskRef(taskRef.idTaskRef);
                    request.setIdList(2);
                    taskRefService.update_task_ref(request, {}, function (err: any, response: any) {
                        if (err) {
                            console.log(err.code);
                            console.log(err.message);
                        } else {
                            getDatas();
                        }
                    });
                }
                else if (idList === 2) {
                    let request = new UpdateTaskRefRequest();
                    request.setIdTaskRef(taskRef.idTaskRef);
                    request.setIdList(1);
                    taskRefService.update_task_ref(request, {}, function (err: any, response: any) {
                        if (err) {
                            console.log(err.code);
                            console.log(err.message);
                        } else {
                            getDatas();
                        }
                    });
                }
                else {
                    throw new Error("Task is out of bound.");
                }
                taskRef.selected = false;
                setTaskRefs(new Map(taskRefs.set(taskRef.idTaskRef, taskRef)));

            }
        });
    }, [getDatas, taskRefService, taskRefs]);

    const changeTaskColor = React.useCallback((taskId: string, value: string) => {
        let request = new UpdateTaskRequest();
        request.setIdTask(taskId);
        request.setColor(value);
        taskService.update_task(request, {}, function (err: any, response: any) {
            if (err) {
                console.log(err.code);
                console.log(err.message);
            } else {
                getDatas();
            }
        });
    }, [getDatas, taskService]);

    const copyByReferenceSelectedTaskRefs = React.useCallback((idList: number) => {
        taskRefs.forEach(taskRef => {
            if (taskRef.selected === true && idList === taskRef.idList) {
                let request = new CreateTaskRefRequest();
                request.setIdTask(taskRef.task.idTask);
                request.setIdList(idList);
                taskRefService.create_task_ref(request, {}, function (err: any, response: any) {
                    if (err) {
                        console.log(err.code);
                        console.log(err.message);
                    } else {
                        getDatas();
                    }
                });
            }
        });
    }, [getDatas, taskRefService, taskRefs]);

    const duplicateSelectedTaskRefs = React.useCallback((idList: number) => {
        taskRefs.forEach(taskRef => {
            if (taskRef.selected === true && idList === taskRef.idList) {
                createNewTask(taskRef.task.title, idList);
            }
        });
    }, [createNewTask, taskRefs]);
    return {
        tasks,
        taskRefs,
        createNewTask,
        getDatas,
        getAllTaskRefs,
        getAllTasks,
        deleteSelectedTaskRefs
        ,
        deleteAllTasks,
        selectTaskRef,
        moveSelectedTasks,
        changeTaskColor,
        copyByReferenceSelectedTaskRefs,
        duplicateSelectedTaskRefs,
    };
};
