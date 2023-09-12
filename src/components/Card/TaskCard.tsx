import { useContext } from "react";
import TaskRef from "../../types/Task/TaskRef";
import TaskContext from "../../TasksContext";
import React from "react";

interface TaskCardProps {
    taskRef: TaskRef
}


export default function TaskCard(props: TaskCardProps) {
    let { taskRefs, tasks, selectTaskRef, changeTaskColor } = useContext(TaskContext)
    const [cardColor, setCardColor] = React.useState(props.taskRef.task.color)

    const HandleColorChange = (event: { target: { value: any; }; }) => {
        changeTaskColor(props.taskRef.task.id, event.target.value)

        setCardColor(props.taskRef.task.color)
        console.log("changing color ref", tasks);
        console.log("cardColor", cardColor);


    }

    const handleSelectCheckBoxClick = () => {
        selectTaskRef(props.taskRef)
    }

    return <div className="Task-Card" style={{
        backgroundColor: cardColor
    }} >
        <h2>{props.taskRef.task.title}</h2>

        <input type="text" onChange={HandleColorChange} placeholder="Change Color!" />
        <div style={{ display: "flex" }}>
            <p>select :</p>
            <input type="checkbox" value={props.taskRef.selected ? "checked" : "unchecked"} onClick={handleSelectCheckBoxClick} />
        </div>
    </div>
}