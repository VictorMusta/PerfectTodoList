import React, { useContext } from 'react';
import '../stylesheets/App.css';
import TaskCard from '../components/Card/TaskCard';
import TaskContext from '../TasksContext';

function TodoMain() {

  const [titleField, setTitleField] = React.useState<string>();

  const handleTitleFieldChange = (event: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
    setTitleField(event.target.value)
  }
  let { tasks, createNewTask } = useContext(TaskContext)

  const updateTaskCardList = React.useMemo(() => {

    return tasks.map(task =>
    (
      <TaskCard title={task.title} style={{ borderColor: "yellow" }} />
    )
    )
  }, [tasks]);


  const handleAddButtonClick = () => {
    if (titleField) {
      createNewTask(titleField)
    }
    else {
      alert("Please mind naming your task before creating it.")
    }
  };



  return (
    <>
      <div className='Tasks-button-div'>
        <div>
          <input type='text' placeholder='Name of your Task' onChange={handleTitleFieldChange} />
          <button className='Task-button' onClick={handleAddButtonClick}>ADD</button>
        </div>
        <button className='Task-button' onClick={() => null} >DELETE</button >
        <button className='Task-button' onClick={() => console.log("cc")}>COPY TASK</button>
        <button className='Task-button' onClick={() => console.log("cc")} >COPY BY REF</button>
        <button className='Task-button' onClick={() => console.log("cc")} >MOVE</button>
      </div >
      <div className="Tasks-cards-div">
        <>
          {updateTaskCardList}
        </>
      </div>
      <div className="Tasks-cards-div">
      </div>

    </>
  );
}
export { TodoMain };
