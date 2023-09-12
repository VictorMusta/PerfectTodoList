import React from 'react'
import Task from './types/Task/Task'
import TaskRef from './types/Task/TaskRef'
import { nanoid } from "nanoid";


type selectTaskRefType = (taskRef: TaskRef) => void
type createNewTaskType = (title: string) => void
type deleteSelectedTasksType = (idList: number) => void
type moveSelectedTasksType = (idList: number) => void
type changeTaskColorType = (taskId: string, newColor: string) => void
// type removeSelectedTasksType = () => void

const useTaskContextContent = () => {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [taskRefs, setTaskRefs] = React.useState<TaskRef[]>([])

  // //Init taskRefs[] by putting in tasksList
  // React.useEffect(() => {
  //   setTaskRefs(tasks.map(task => ({ task: task, listId: 1, selected: false })))
  // }, [])

  const createNewTask = (title: string) => {
    console.log("créer une tâche");

    let NewTask: Task = {
      id: `task-${(nanoid())}`, title: title, resolved: false, color: "white"
    }
    setTasks(oldArray => [...oldArray, NewTask])
    setTaskRefs(oldArray => [...oldArray, { task: NewTask, listId: 1, selected: false }])
  };
  // React.useEffect(() => {
  //   console.log(tasks)


  // }, [tasks])
  // React.useEffect(() => {
  //   console.log(taskRefs)


  // }, [taskRefs])


  const deleteSelectedTasks = (listId: number) => {

    let newTaskRefArray = taskRefs.filter(taskRef => taskRef.selected !== true && taskRef.listId === listId)
    let newTaskArray = tasks.filter(task => newTaskRefArray.map(taskRef => (taskRef.task)).find(tasktofind => tasktofind.id === task.id))
    setTaskRefs(newTaskRefArray)
    setTasks(newTaskArray)
  };

  // const updateTaskCardList = React.useMemo(() => {

  //   return tasks.map(TaskCard => {
  //     if (props.idList == TaskCard.idList) {
  //       return <TaskCard title={task.title} />
  //     }
  //   }
  //   )
  // }, [tasks]);

  const selectTaskRef = (taskToSelect: TaskRef) => {
    console.log("select!")
    setTaskRefs(taskRefs.map(taskRef => {
      if (taskRef == taskToSelect) {
        return { ...taskRef, selected: !taskRef.selected }
      }
      return taskRef;
    }))
  }
  const moveSelectedTasks = (listId: number) => {
    let newTaskRefArray = taskRefs.map(taskRef => {
      if (taskRef.selected === true && taskRef.listId == listId) {
        if (listId === 1)
          return { ...taskRef, listId: 2, selected: false }
        else if (listId === 2)
          return { ...taskRef, listId: 1, selected: false }
        else {
          throw "mec jsp"
        }
      }
      else {
        return taskRef
      }
    }
    )
    let newTaskArray = tasks.filter(task => newTaskRefArray.map(taskRef => (taskRef.task)).find(tasktofind => tasktofind.id === task.id))
    setTaskRefs(newTaskRefArray)
    setTasks(newTaskArray)
  };

  const changeTaskColor = (taskId: string, value: string) => {
    let newTaskRefArray = tasks.map(task => {
      if (taskId == task.id) {
        console.log("couleur changée mec");
        return { ...task, color: value }
      }
      else {
        return task
      }
    })
    setTasks(newTaskRefArray)
    console.log("taskrefs after color change", taskRefs);

  }
  // const removeSelectedTasks = () => {
  //   setTasks(oldArray => oldArray.filter(task => task.selected !== true))
  // };

  return {
    taskRefs, tasks, createNewTask, deleteSelectedTasks, selectTaskRef, moveSelectedTasks, changeTaskColor
  }
}

const mydefaultInterfaceObject: TaskContextInterface = {
  selectTaskRef: (_) => {
    throw "function not implemented yet."
  },
  createNewTask: (_) => {
    throw "function not implemented yet."
  },
  deleteSelectedTasks: (_) => {
    throw "function not implemented yet."
  },
  moveSelectedTasks: (_) => {
    throw "function not implemented yet."
  },
  changeTaskColor: (_) => {
    throw "function not implemented yet."
  },
  // removeSelectedTasks: () => {
  //   throw "function not implemented yet."
  // },
  taskRefs: [],
  tasks: [],
}

interface TaskContextInterface {
  // selectTask: selectTaskType;
  selectTaskRef: selectTaskRefType
  createNewTask: createNewTaskType
  deleteSelectedTasks: deleteSelectedTasksType
  moveSelectedTasks: moveSelectedTasksType
  changeTaskColor: changeTaskColorType
  taskRefs: TaskRef[]
  tasks: Task[]
}

const TaskContext = React.createContext<TaskContextInterface>(mydefaultInterfaceObject)
export default TaskContext



export const TaskProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <TaskContext.Provider value={useTaskContextContent()}>
      {children}
    </TaskContext.Provider>
  )
}
export type {
  TaskContextInterface
}