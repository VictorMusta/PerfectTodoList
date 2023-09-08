import React from 'react';
import '../stylesheets/App.css';

import TaskCard from '../components/Card/TaskCard';
import Task from '../types/Task/Task';
function TodoMain() {

const [tasks, setTasks] = React.useState<Task[]>([])
const MyContext = React.createContext(tasks);
const [titleField, setTitleField] = React.useState<string>();
const handleTitleFieldChange = (event: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
  setTitleField(event.target.value)
}

const updateTaskCardList = React.useMemo(() => {
  
  return tasks.map(task => 
    (
    <TaskCard title={task.title} style={{borderColor:task.selected? "red":"yellow"}} onClick={() => selectTask(task)}/>)
  )
},[tasks]);

const selectTask = (taskToSelect: Task) => {
  setTasks( tasks.map(task => {
    if(task.title === taskToSelect.title){
      return { ...task, selected: !task.selected}
    }
    return task;
  }))
}
const handleAddButtonClick = () => {
  if(titleField){
    let newTask: Task = {
      creationDate: Date.now(), title: titleField, state:false, color:"yellow", selected:false
    }
    setTasks(oldArray => [...oldArray, newTask])
  }
  else{
    alert("Please mind naming your task before creating it.")
  }
};

const handleDeleteButtonClick = () => {
    setTasks(oldArray => oldArray.filter(task => task.selected !== true))
  };

return (
    <MyContext.Provider value={tasks}>
      <div className='Tasks-button-div'>
        <div>
          <input type='text'placeholder='Name of your Task' onChange={handleTitleFieldChange}/>
          <button className='Task-button' onClick={handleAddButtonClick}>ADD</button>  
        </div>
          <button className='Task-button' onClick={handleDeleteButtonClick} >DELETE</button>         
          <button className='Task-button' onClick={() => console.log("cc")}>COPY TASK</button>         
          <button className='Task-button' onClick={() => console.log("cc")} >COPY BY REF</button>          
          <button className='Task-button' onClick={() => console.log("cc")} >MOVE</button>         
      </div>
        <div className="Tasks-cards-div">
          <>
          {updateTaskCardList}
          </>
        </div>
        <div className="Tasks-cards-div">
        </div>
        </MyContext.Provider>
  );
}
export {TodoMain}