import React from 'react'
import Task from './types/Task/Task'
import { nanoid } from "nanoid";


type selectTaskType = (task: Task) => void
type createNewTaskType = (title: string) => void
type removeSelectedTasksType = () => void

const useTaskContextContent = () => {
  const [tasks, setTasks] = React.useState<Task[]>([])
  // const selectTask = (taskToSelect: Task) => {
  //   setTasks(tasks.map(task => {
  //     if (task.title === taskToSelect.title) {
  //       return { ...task, selected: !task.selected }
  //     }
  //     return task;
  //   }))
  // }

  const createNewTask = (title: string) => {
    let createNewTask: Task = {
      id: `task-${(nanoid())}`, title: title, resolved: false, color: "white"
    }
    setTasks(oldArray => [...oldArray, createNewTask])
  };

  // const removeSelectedTasks = () => {
  //   setTasks(oldArray => oldArray.filter(task => task.selected !== true))
  // };

  return {
    tasks, createNewTask
  }
}

const mydefaultInterfaceObject: TaskContextInterface = {
  // selectTask: (_) => {
  //   throw "function not implemented yet."
  // },
  createNewTask: (_) => {
    throw "function not implemented yet."
  },
  // removeSelectedTasks: () => {
  //   throw "function not implemented yet."
  // },
  tasks: []
}

interface TaskContextInterface {
  // selectTask: selectTaskType;
  createNewTask: createNewTaskType
  // removeSelectedTasks: removeSelectedTasksType
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