import Task from "./Task";

type TaskRef = {
  id: string,
  task: Task,
  listId: number,
  selected: boolean,
}
export default TaskRef;