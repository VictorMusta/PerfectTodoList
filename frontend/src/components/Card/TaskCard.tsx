import { useContext } from "react";
import TaskRef from "../../types/Task/TaskRef";
import TaskContext from "../../TasksContext";

interface TaskCardProps {
    taskRef: TaskRef
}


export default function TaskCard(props: TaskCardProps) {
    let {
        selectTaskRef,
        changeTaskColor
    } = useContext(TaskContext)

    const HandleColorChange = (event: { target: { value: any; }; }) => {
        changeTaskColor(props.taskRef.task.idTask, event.target.value)

    }
    const handleSelectCheckBoxClick = () => {
        selectTaskRef(props.taskRef)
    }

    return <div className="Task-Card" style={{
        backgroundColor: props.taskRef.task.color
    }} >
        <h2>{props.taskRef.idTaskRef}</h2>

        <input type="text" onChange={
            HandleColorChange
        } placeholder="Change Color!" value={props.taskRef.task} />
        <div style={{ display: "flex" }}>
            <p>select :</p>
            <input type="checkbox" value={props.taskRef.selected} onClick={handleSelectCheckBoxClick} />
        </div>
    </div>
}