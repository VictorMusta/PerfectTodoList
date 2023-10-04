import Task from "./Task";

type TaskRef = {
  idTaskRef: string,
  task: Task,
  idList: number,
  selected: boolean,
}
export default TaskRef;