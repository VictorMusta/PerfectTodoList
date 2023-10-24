import React, { useContext } from "react";
import "../stylesheets/App.css";
import TaskCard from "../components/Card/TaskCard";
import TaskContext from "../TasksContext";
import { TaskButtons } from "../components/TaskButtons/TaskButtons";
import { JSX } from "react/jsx-runtime";
interface TodoListProps {
	listId: number
}
function TodoList(props: TodoListProps) {
	const { taskRefs, getAllTasks
	} = useContext(TaskContext);

	React.useEffect(() => {
		getAllTasks();
	}, []);

	const updateTaskCardList = React.useMemo(() => {
		const taskRefsTable: JSX.Element[] = [];

		taskRefs.forEach(taskRef => {
			if (props.listId === taskRef.idList) {
				taskRefsTable.push(<TaskCard key={taskRef.idTaskRef} taskRef={taskRef} />);
			}
		}
		);
		return taskRefsTable;
	}, [props.listId, taskRefs]);

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
