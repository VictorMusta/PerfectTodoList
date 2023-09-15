import React, { useState } from 'react'
import Task from './types/Task/Task'
import TaskRef from './types/Task/TaskRef'
import { nanoid } from "nanoid";

// Création des types afin de typer les fonctions présentes dans mon interface.
type createNewTaskType = (title: string) => void
type deleteSelectedTasksType = (listId: number) => void
type selectTaskRefType = (taskRef: TaskRef) => void
type moveSelectedTasksType = (listId: number) => void
type changeTaskColorType = (taskId: string, newColor: string) => void
type duplicateSelectedTaskRefsType = (listId: number) => void
type copyByReferenceSelectedTaskRefsType = (listId: number) => void
type getListSizeType = (listId: number) => number
type getListSelectedSizeType = (listId: number) => number

//création d'une interface pour pouvoir renvoyer des valeurs par défaut si on appelle mes fonctions depuis en dehors de mon contexte
interface TaskContextInterface {
  tasks: Map<string, Task>
  taskRefs: Map<string, TaskRef>
  getListSize: getListSizeType
  getListSelectedSize: getListSelectedSizeType
  createNewTask: createNewTaskType
  deleteSelectedTasks: deleteSelectedTasksType
  selectTaskRef: selectTaskRefType
  moveSelectedTasks: moveSelectedTasksType
  changeTaskColor: changeTaskColorType
  duplicateSelectedTaskRefs: duplicateSelectedTaskRefsType
  copyByReferenceSelectedTaskRefs: copyByReferenceSelectedTaskRefsType

}

//création d'un objet contenant des valeurs 
const mydefaultInterfaceObject: TaskContextInterface = {
  selectTaskRef: (_) => {
    throw new Error("function not implemented yet.")
  },
  createNewTask: (_) => {
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
  getListSize: (_) => {
    throw new Error("function not implemented yet.")
  },
  getListSelectedSize: (_) => {
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
  const [selectedTaskRefsNumberForEachList, setselectedTaskRefsNumberForEachList] = useState(0);
  const [TaskRefsOfListIdSize, setTaskRefsOfListIdSize] = useState(0);

  const getListSize = (idList: number) => {
    let cpt = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (let [_, value] of taskRefs) {
      if (value.listId === idList) {
        cpt++
      }
    }
    return cpt
  }

  const getListSelectedSize = (idList: number) => {
    let cpt = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (let [_, value] of taskRefs) {
      if (value.listId === idList && value.selected === true) {
        cpt++
      }
    }
    return cpt
  }

  // React.useEffect(() => {
  //   console.log("sizes changes!", selectedTaskRefsNumberForEachList);
  //   console.log("sizes changes!", TaskRefsOfListIdSize);
  //   let NumberOfTaskRefsInList = 0;
  //   let NumberOfSelectedTaskRefsInList = 0;
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   for (let [_, value] of taskRefs) {
  //     if (value.listId === props.listId && value.selected === true) {
  //       NumberOfSelectedTaskRefsInList++
  //     }
  //     if (value.listId === props.listId) {
  //       NumberOfTaskRefsInList++
  //     }
  //   }

  //   setTaskRefsOfListIdSize(NumberOfTaskRefsInList)
  //   setselectedTaskRefsNumberForEachList(NumberOfSelectedTaskRefsInList)

  // }, [TaskRefsOfListIdSize, props.listId, selectTaskRef, selectedTaskRefsNumberForEachList, taskRefs]);

  const createNewTask = (title: string) => {
    let NewTask: Task = {
      id: `task-${(nanoid())}`, title: title, resolved: false, color: "white"
    }
    let NewTaskRef: TaskRef = { id: `taskRef-${(nanoid())}`, task: NewTask, listId: 1, selected: false }
    setTasks(new Map(tasks.set(NewTask.id, NewTask)))
    setTaskRefs(new Map(taskRefs.set(NewTaskRef.id, NewTaskRef)))
  };

  const deleteSelectedTasks = (listId: number) => {
    taskRefs.forEach(taskRef => {
      if (taskRef.selected === true && taskRef.listId === listId) { taskRefs.delete(taskRef.id) }
    }
    )
    setTaskRefs(new Map(taskRefs))
  }

  const selectTaskRef = (taskRefToSelect: TaskRef) => {
    taskRefToSelect.selected = !taskRefToSelect.selected
    setTaskRefs(new Map(taskRefs.set(taskRefToSelect.id, taskRefToSelect)))
  }

  const moveSelectedTasks = (listId: number) => {
    // taskRefs.forEach(taskRefs => {
    //   if (taskRefs.listId === listId)
    //     return taskRefs
    // }).size()
    // if (taskRefs.keys(tasks).size >= 6) {
    //   alert("mec t'as trop de tâches")
    // }
    taskRefs.forEach(taskRef => {
      if (taskRef.selected === true && taskRef.listId === listId) {
        if (listId === 1) {
          taskRef.listId = 2
        }
        else if (listId === 2) {
          taskRef.listId = 1
        }
        else {
          throw new Error("Task is out of bound.")
        }
        taskRef.selected = false;
        setTaskRefs(new Map(taskRefs.set(taskRef.id, taskRef)))

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

  const copyByReferenceSelectedTaskRefs = (listId: number) => {
    taskRefs.forEach(taskRef => {
      if (taskRef.selected === true) {
        let NewTaskRef: TaskRef = { id: `taskRef-${(nanoid())}`, task: taskRef.task, listId: listId, selected: false }
        setTaskRefs(new Map(taskRefs.set(NewTaskRef.id, NewTaskRef)))
      }
    })
  }

  const duplicateSelectedTaskRefs = (listId: number) => {
    taskRefs.forEach(taskRef => {
      if (taskRef.selected === true) {
        let NewTask: Task = {
          id: `task-${(nanoid())}`, title: taskRef.task.title, resolved: taskRef.task.resolved, color: taskRef.task.color
        }
        setTasks(new Map(tasks.set(NewTask.id, NewTask)))
        let NewTaskRef: TaskRef = { id: `taskRef-${(nanoid())}`, task: NewTask, listId: listId, selected: false }
        setTaskRefs(new Map(taskRefs.set(NewTaskRef.id, NewTaskRef)))
      }
    })

  }
  return {
    tasks,
    taskRefs,
    getListSize,
    getListSelectedSize,
    createNewTask,
    deleteSelectedTasks,
    selectTaskRef,
    moveSelectedTasks,
    changeTaskColor,
    copyByReferenceSelectedTaskRefs,
    duplicateSelectedTaskRefs
  }
}

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TaskContext.Provider value={useTaskContextContent()}>
      {children}
    </TaskContext.Provider>
  )
}
