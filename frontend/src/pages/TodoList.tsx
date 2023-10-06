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
  let { taskRefs } = useContext(TaskContext)

  const updateTaskCardList = React.useMemo(() => {
    let TaskTable: JSX.Element[] = []
    taskRefs.forEach(taskRef => {
      if (props.listId === taskRef.idList) {
        TaskTable.push(<TaskCard key={taskRef.idTaskRef} taskRef={taskRef} />)
        // return <TaskCard key={taskRef.task.id} taskRef={taskRef} />
      }
    }
    )
    return TaskTable;
  }, [taskRefs, props.listId]);

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
