import { useContext } from "react"
import TaskContext from "../../TasksContext"
interface TaskButtonsProps {
    listId: number

}
const TaskButtons = (props: TaskButtonsProps) => {
    let {
        deleteSelectedTasks,
        moveSelectedTasks,
        copyByReferenceSelectedTaskRefs,
        duplicateSelectedTaskRefs,
    } = useContext(TaskContext)


    return (
        <>
            <button className='Task-button' onClick={() => deleteSelectedTasks(props.listId)} >DELETE</button >
            <button className='Task-button' onClick={() => duplicateSelectedTaskRefs(props.listId)}>DUPLICATE</button>
            <button className='Task-button' onClick={() => copyByReferenceSelectedTaskRefs(props.listId)} >COPY BY REF</button>
            <button className='Task-button' onClick={() => moveSelectedTasks(props.listId)} > MOVE</button >
        </>
    )
}
export { TaskButtons }