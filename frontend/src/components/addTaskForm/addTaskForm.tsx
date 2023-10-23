import React, { useContext } from "react";
import TasksContext from "../../TasksContext";


const AddTaskForm = () => {
	const { createNewTask, taskRefs, deleteAllTasks } = useContext(TasksContext);
	const [numberOfTaskRefsInFirstList, setNumberOfTaskRefsInList] = React.useState(0);
	const [titleField, setTitleField] = React.useState("");

	React.useEffect(() => {
		let NumberOfTaskRefsInFirstList = 0;
		for (const [, value] of taskRefs) {
			if (value.idList === 1) {
				NumberOfTaskRefsInFirstList++;
			}
		}
		setNumberOfTaskRefsInList(NumberOfTaskRefsInFirstList);
	}, [taskRefs]);
	const handleTitleFieldChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
		setTitleField(e.target.value);
	};
	function handleSubmit() {
		createNewTask(titleField, 1);

	}
	return (
		<div >
			<input type='text' placeholder='Name of your Task' onChange={handleTitleFieldChange} />
			<button className='Task-button' disabled={titleField === "" || numberOfTaskRefsInFirstList >= 6} onClick={handleSubmit}>ADD</button>
			<button className='Task-button' disabled={taskRefs.size === 0} onClick={deleteAllTasks}>CLEAR ALL TASKS</button>
		</div >
	);
};
export {
	AddTaskForm
};