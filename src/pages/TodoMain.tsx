import React from 'react';

import '../stylesheets/App.css';
import TaskManagementButton from '../components/Button/TaskManagementButton';
import TaskCard from '../components/Card/TaskCard';
import Task from '../types/Task/Task';

function TodoMain() {
const [tasks, setTasks] = React.useState<Task[]>([])
const [titleField, setTitleField] = React.useState<string>();
const handleTitleFieldChange = (event: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
  setTitleField(event.target.value)
}

const updateTaskCardList = React.useMemo(() => {
  
  return tasks.map(task => 
    (<TaskCard title={task.title} style={{borderColor:task.selected? "red":"yellow"}} onClick={() => selectTask(task)}/>)
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
const onAddBtnClick = () => {
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

const onDeleteBtnClick = () => {
    setTasks(oldArray => oldArray.filter(task => task.selected !== true))};
return (
    <>
      <div className='Tasks-button-div'>
        <div>
          <input type='text'placeholder='Name of your Task' onChange={handleTitleFieldChange}/>
        <TaskManagementButton onClick={onAddBtnClick} textValue="NEW"/>
        </div>
          <TaskManagementButton onClick={onDeleteBtnClick} textValue="DELETE"/>         
          <TaskManagementButton onClick={() => console.log("cc")} textValue="MOVE"/>         
          <TaskManagementButton onClick={() => console.log("cc")} textValue="COPY"/>         
          <TaskManagementButton onClick={() => console.log("cc")} textValue="COPY BY REFERENCE"/>         
      </div>
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
export {TodoMain}