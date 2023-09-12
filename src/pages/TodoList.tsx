import React, { useContext } from 'react';
import '../stylesheets/App.css';
import TaskCard from '../components/Card/TaskCard';
import TaskContext from '../TasksContext';
import { TaskButtons } from '../components/TaskButtons/TaskButtons';
interface TodoListProps {
  idList: number
}
function TodoList(props: TodoListProps) {
  let { taskRefs } = useContext(TaskContext)

  const updateTaskCardList = React.useMemo(() => {

    return taskRefs.map(taskRef => {
      if (props.idList == taskRef.listId) {
        return <TaskCard key={taskRef.task.id} taskRef={taskRef} />
      }
    }
    )
  }, [taskRefs]);

  return (
    <div >
      <div className='Tasks-button-div'>
        <TaskButtons idList={props.idList} />
      </div >
      <div className="Tasks-cards-div">
        {updateTaskCardList}
      </div>
    </div>
  );
}
export { TodoList };
