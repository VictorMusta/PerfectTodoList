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
  let { taskRefs, getDatas } = useContext(TaskContext)

  const GetInitData = React.useEffect(() => {
    // let taskRefsList = getAllTaskRefs()
    // console.log("taskRefs[0]", taskRefsList[0])
    // console.log("taskRefs[0].array[0]", taskRefsList[0].array[0])
    // console.log("taskRefs[0].array", taskRefsList[0].array)
    // console.log("coucou on startup !");
    getDatas()

  }, []);

  const updateTaskCardList = React.useMemo(() => {
    // getAllTaskRefs()
    console.log("update!");

    let taskRefsTable: JSX.Element[] = []
    taskRefs.forEach(taskRef => {
      if (props.listId === taskRef.idList) {
        taskRefsTable.push(<TaskCard key={taskRef.idTaskRef} taskRef={taskRef} />)
      }
      // return <TaskCard key={taskRef.task.id} taskRef={taskRef} />
    }
    )
    return taskRefsTable;
  }, [taskRefs]);

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
