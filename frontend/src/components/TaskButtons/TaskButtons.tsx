import { useContext, useState } from "react";
import TaskContext from "../../TasksContext";
import React from "react";
interface TaskButtonsProps {
	idList: number

}
const TaskButtons = (props: TaskButtonsProps) => {

	const {
		taskRefs,
		deleteSelectedTaskRefs,
		moveSelectedTasks,
		copyByReferenceSelectedTaskRefs,
		duplicateSelectedTaskRefs,
	} = useContext(TaskContext);
	const [selectedTaskRefsNumber, setselectedTaskRefsNumber] = useState(0);
	const [TaskRefsOfIdListSize, setTaskRefsOfIdListSize] = useState(0);
	const MAX_TASK_REFS_PER_LIST = 6;

	React.useEffect(() => {

		let NumberOfTaskRefsInList = 0;
		let NumberOfSelectedTaskRefsInList = 0;
		for (const [, value] of taskRefs) {
			if (value.idList === props.idList && value.selected === true) {
				NumberOfSelectedTaskRefsInList++;
			}
			if (value.idList === props.idList) {
				NumberOfTaskRefsInList++;
			}
		}
		setTaskRefsOfIdListSize(NumberOfTaskRefsInList);
		setselectedTaskRefsNumber(NumberOfSelectedTaskRefsInList);

	}, [props.idList, taskRefs]);

	return (
		<>
			<button className='Task-button' disabled={selectedTaskRefsNumber === 0} onClick={() => deleteSelectedTaskRefs(props.idList)} >DELETE</button >

			<button className='Task-button' disabled={(selectedTaskRefsNumber + TaskRefsOfIdListSize) > MAX_TASK_REFS_PER_LIST || selectedTaskRefsNumber === 0} onClick={() => duplicateSelectedTaskRefs(props.idList)}>DUPLICATE</button>

			<button className='Task-button' disabled={(selectedTaskRefsNumber + TaskRefsOfIdListSize) > MAX_TASK_REFS_PER_LIST || selectedTaskRefsNumber === 0} onClick={() => copyByReferenceSelectedTaskRefs(props.idList)} >COPY BY REF</button>

			<button className='Task-button' disabled={selectedTaskRefsNumber === 0 || !((taskRefs.size - TaskRefsOfIdListSize + selectedTaskRefsNumber) <= MAX_TASK_REFS_PER_LIST)} onClick={() => moveSelectedTasks(props.idList)} > MOVE</button >
		</>
	);
};
export { TaskButtons };