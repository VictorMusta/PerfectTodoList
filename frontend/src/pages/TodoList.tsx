import React, { useContext } from 'react';
import '../stylesheets/App.css';
import TaskCard from '../components/Card/TaskCard';
import TaskContext from '../TasksContext';
import { TaskButtons } from '../components/TaskButtons/TaskButtons';
import { JSX } from 'react/jsx-runtime';
interface TodoListProps {
  listId: number
}
function TodoList(props: TodoListProps) {
  let { tasks, taskRefs, getAllTasks, getAllTaskRefs } = useContext(TaskContext)

  const GetInitData = React.useEffect(() => {
    // let taskRefsList = getAllTaskRefs()
    // console.log("taskRefs[0]", taskRefsList[0])
    // console.log("taskRefs[0].array[0]", taskRefsList[0].array[0])
    // console.log("taskRefs[0].array", taskRefsList[0].array)
    // console.log("coucou on startup !");
    getAllTasks()
    getAllTaskRefs()

  }, []);

  const updateTaskCardList = React.useMemo(() => {
    // getAllTaskRefs()
    console.log("ici mec")
    tasks.forEach(task => console.log(task))
    console.log("ici mec")
    console.log(tasks)
    console.log("coucou on startup !");

    let taskRefsTable: JSX.Element[] = []
    taskRefs.forEach(taskRef => {
      taskRefsTable.push(<TaskCard key={taskRef.idTaskRef} taskRef={taskRef} />)
      // return <TaskCard key={taskRef.task.id} taskRef={taskRef} />
    }
    )
    return taskRefsTable;
  }, [tasks, taskRefs]);

  return (
    <div >
      <div className='Tasks-button-div'>
        <TaskButtons idList={props.listId} />
      </div >
      <div className="Tasks-cards-div">
        <>
          {updateTaskCardList}
        </>
      </div>
    </div>
  );
}
export { TodoList };
