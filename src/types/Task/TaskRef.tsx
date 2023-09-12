import Task from "./Task";

type TaskRef = {
  task: Task,
  listId: number,
  selected: boolean,
}
export default TaskRef;