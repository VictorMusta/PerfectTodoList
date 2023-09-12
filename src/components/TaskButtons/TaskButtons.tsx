import { useContext } from "react"
import TaskContext from "../../TasksContext"
interface TaskButtonsProps {
    idList: number

}
const TaskButtons = (props: TaskButtonsProps) => {
    let { deleteSelectedTasks, moveSelectedTasks } = useContext(TaskContext)

    const handleCopyButtonClick = (props: TaskButtonsProps) => {

    }

    return (
        <>
            <button className='Task-button' onClick={() => deleteSelectedTasks(props.idList)} >DELETE</button >
            <button className='Task-button' onClick={() => handleCopyButtonClick}>COPY TASK</button>
            <button className='Task-button' onClick={() => console.log("COPY BY REF")} >COPY BY REF</button>
            <button className='Task-button' onClick={() => moveSelectedTasks(props.idList)} > MOVE</button >
        </>
    )
}
export { TaskButtons }