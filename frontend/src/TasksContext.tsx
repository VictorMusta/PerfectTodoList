import React from 'react'
import Task from './types/Task/Task'
import TaskRef from './types/Task/TaskRef'
import { nanoid } from "nanoid";
import google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb.js'
// import { TaskServiceClient } from './protos/protostubs/TaskServiceClientPb';
// import { TaskRequest } from './protos/protostubs/Task_pb';
// Création des types afin de typer les fonctions présentes dans mon interface.
type createNewTaskType = (title: string) => void
type deleteSelectedTasksType = (idList: number) => void
type selectTaskRefType = (taskRef: TaskRef) => void
type moveSelectedTasksType = (idList: number) => void
type changeTaskColorType = (taskId: string, newColor: string) => void
type duplicateSelectedTaskRefsType = (idList: number) => void
type copyByReferenceSelectedTaskRefsType = (idList: number) => void
type getAllTaskRefsType = () => void
type getAllTasksType = () => void


//création d'une interface pour pouvoir renvoyer des valeurs par défaut si on appelle mes fonctions depuis en dehors de mon contexte
interface TaskContextInterface {
  tasks: Map<string, Task>
  taskRefs: Map<string, TaskRef>
  createNewTask: createNewTaskType
  deleteSelectedTasks: deleteSelectedTasksType
  selectTaskRef: selectTaskRefType
  moveSelectedTasks: moveSelectedTasksType
  changeTaskColor: changeTaskColorType
  duplicateSelectedTaskRefs: duplicateSelectedTaskRefsType
  copyByReferenceSelectedTaskRefs: copyByReferenceSelectedTaskRefsType
  getAllTaskRefs: getAllTaskRefsType
  getAllTasks: getAllTasksType

}

//création d'un objet contenant des valeurs 
const mydefaultInterfaceObject: TaskContextInterface = {
  selectTaskRef: (_) => {
    throw new Error("function not implemented yet.")
  },
  createNewTask: (_) => {
    throw new Error("function not implemented yet.")
  },
  getAllTaskRefs: () => {
    throw new Error("function not implemented yet.")
  },
  getAllTasks: () => {
    throw new Error("function not implemented yet.")
  },
  deleteSelectedTasks: (_) => {
    throw new Error("function not implemented yet.")
  },
  moveSelectedTasks: (_) => {
    throw new Error("function not implemented yet.")
  },
  changeTaskColor: (_) => {
    throw new Error("function not implemented yet.")
  },
  copyByReferenceSelectedTaskRefs: (_) => {
    throw new Error("function not implemented yet.")
  },
  duplicateSelectedTaskRefs: (_) => {
    throw new Error("function not implemented yet.")
  },
  taskRefs: new Map(),
  tasks: new Map()
}

const TaskContext = React.createContext<TaskContextInterface>(mydefaultInterfaceObject)
export default TaskContext

const useTaskContextContent = () => {
  const [tasks, setTasks] = React.useState(new Map<string, Task>())
  const [taskRefs, setTaskRefs] = React.useState(new Map<string, TaskRef>())
  const { CreateTaskRequest, GetTaskRequest } = require("../src/protos/protostubs/Task_pb")
  const { TaskServiceClient } = require("../src/protos/protostubs/TaskServiceClientPb")
  const { TaskRefServiceClient } = require("../src/protos/protostubs/TaskRefServiceClientPb")
  let taskService = new TaskServiceClient("http://localhost:10000")
  let taskRefService = new TaskRefServiceClient("http://localhost:10000")

  const createNewTask = (title: string) => {
    let request = new CreateTaskRequest()
    request.setTitle(title)
    taskService.create_task(request, {}, function (err: any, response: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      }
    });
  };

  const getAllTasks = () => {
    let empty = new google_protobuf_empty_pb.Empty()
    taskService.get_all_tasks(empty, {}, function (err: any, response: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log(response.getTasksList());

        response.getTasksList().forEach((task: any) => {
          let tempTask: Task = { idTask: task.array[0], title: task.array[1], color: task.array[2], resolved: task.array[3] ? task.array[3] : false }
          setTasks(new Map(tasks.set(tempTask.idTask, tempTask)))
        })
        // console.log("coucou")
        // console.log(tasks)
        // tasks.forEach(task => {
        //   console.log(task);

        // })
      }


    });

  }
  const getAllTaskRefs = () => {
    let empty = new google_protobuf_empty_pb.Empty()
    taskRefService.get_all_task_refs(empty, {}, function (err: any, response: any) {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      } else {
        console.log("task refs list", response.getTaskRefsList());
        response.getTaskRefsList().forEach((taskRef: any) => {
          let tempTask: TaskRef = { idTaskRef: taskRef.array[0], task: taskRef.array[1], idList: taskRef.array[2], selected: taskRef.array[3] ? taskRef.array[3] : false }
          setTaskRefs(new Map(taskRefs.set(tempTask.idTaskRef, tempTask)))
        })
        console.log("coucou")
        console.log(taskRefs)
        taskRefs.forEach(task => {
          console.log(task);

        })
      }
    });

  }
  const getOneTask = (idTask: string) => {
    // let request =
    taskService.get_task(idTask)
  }

  const deleteSelectedTasks = (idList: number) => {
    taskRefs.forEach(taskRef => {
      if (taskRef.selected === true && taskRef.idList === idList) { taskRefs.delete(taskRef.idTaskRef) }
    }
    )
    setTaskRefs(new Map(taskRefs))
  }

  const selectTaskRef = (taskRefToSelect: TaskRef) => {
    taskRefToSelect.selected = !taskRefToSelect.selected
    setTaskRefs(new Map(taskRefs.set(taskRefToSelect.idTaskRef, taskRefToSelect)))
  }

  const moveSelectedTasks = (idList: number) => {

    taskRefs.forEach(taskRef => {
      if (taskRef.selected === true && taskRef.idList === idList) {
        if (idList === 1) {
          taskRef.idList = 2
        }
        else if (idList === 2) {
          taskRef.idList = 1
        }
        else {
          throw new Error("Task is out of bound.")
        }
        taskRef.selected = false;
        setTaskRefs(new Map(taskRefs.set(taskRef.idTaskRef, taskRef)))

      }
    })
  }

  const changeTaskColor = (taskId: string, value: string) => {
    let tempTask = tasks.get(taskId)
    if (tempTask) {
      tempTask.color = value
      setTasks(new Map(tasks.set(taskId, tempTask)))
    }
  }

  const copyByReferenceSelectedTaskRefs = (idList: number) => {
    taskRefs.forEach(taskRef => {
      if (taskRef.selected === true) {
        let NewTaskRef: TaskRef = { idTaskRef: `taskRef-${(nanoid())}`, task: taskRef.task, idList: idList, selected: false }
        setTaskRefs(new Map(taskRefs.set(NewTaskRef.idTaskRef, NewTaskRef)))
      }
    })
  }

  const duplicateSelectedTaskRefs = (idList: number) => {
    taskRefs.forEach(taskRef => {
      if (taskRef.selected === true) {
        let NewTask: Task = {
          idTask: `task-${(nanoid())}`, title: taskRef.task.title, resolved: taskRef.task.resolved, color: taskRef.task.color
        }
        setTasks(new Map(tasks.set(NewTask.idTask, NewTask)))
        let NewTaskRef: TaskRef = { idTaskRef: `taskRef-${(nanoid())}`, task: NewTask, idList: idList, selected: false }
        setTaskRefs(new Map(taskRefs.set(NewTaskRef.idTaskRef, NewTaskRef)))
      }
    })
  }
  return {
    tasks,
    taskRefs,
    createNewTask,
    getAllTaskRefs,
    getAllTasks,
    deleteSelectedTasks,
    selectTaskRef,
    moveSelectedTasks,
    changeTaskColor,
    copyByReferenceSelectedTaskRefs,
    duplicateSelectedTaskRefs,
  }
}

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TaskContext.Provider value={useTaskContextContent()}>
      {children}
    </TaskContext.Provider>
  )
}
