import { useContext, KeyboardEvent } from "react";
import TaskRef from "../../types/Task/TaskRef";
import TaskContext from "../../TasksContext";

interface TaskCardProps {
	taskRef: TaskRef;
}

export default function TaskCard(props: TaskCardProps) {
	const { selectTaskRef, changeTaskColor } = useContext(TaskContext);

	const handleColorChange = (target: EventTarget) => {
		if (target instanceof HTMLInputElement) {
			changeTaskColor(props.taskRef.task.idTask, target.value);
		}
	};

	const handleSelectCheckBoxClick = () => {
		selectTaskRef(props.taskRef);
	};

	return (
		<div
			className="Task-Card"
			style={{
				backgroundColor: props.taskRef.task.color,
			}}
		>
			<p>Title: {props.taskRef.task.title}</p>

			<input
				type="text"
				onKeyUp={(key: KeyboardEvent<HTMLInputElement>) => {
					if (key.key === "Enter") {
						handleColorChange(key.target);
					}
				}}
				placeholder={props.taskRef.task.color}
			/>
			<div style={{ display: "flex" }}>
				<p>Select task :</p>
				<input
					type="checkbox"
					defaultChecked={props.taskRef.selected}
					onClick={handleSelectCheckBoxClick}
				/>
			</div>
		</div>
	);
}
