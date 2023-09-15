import { useContext, useState } from "react"
import TaskContext from "../../TasksContext"
import React from "react"
interface TaskButtonsProps {
    listId: number

}
const TaskButtons = (props: TaskButtonsProps) => {

    let {
        taskRefs,
        deleteSelectedTasks,
        moveSelectedTasks,
        copyByReferenceSelectedTaskRefs,
        duplicateSelectedTaskRefs,
    } = useContext(TaskContext)
    const [selectedTaskRefsNumber, setselectedTaskRefsNumber] = useState(0);
    const [TaskRefsOfListIdSize, setTaskRefsOfListIdSize] = useState(0);
    const MAX_TASK_REFS_PER_LIST = 6

    React.useEffect(() => {

        let NumberOfTaskRefsInList = 0;
        let NumberOfSelectedTaskRefsInList = 0;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (let [_, value] of taskRefs) {
            if (value.listId === props.listId && value.selected === true) {
                NumberOfSelectedTaskRefsInList++
            }
            if (value.listId === props.listId) {
                NumberOfTaskRefsInList++
            }
        }
        setTaskRefsOfListIdSize(NumberOfTaskRefsInList)
        setselectedTaskRefsNumber(NumberOfSelectedTaskRefsInList)

    }, [props.listId, taskRefs]);

    return (
        <>
            <button className='Task-button' disabled={selectedTaskRefsNumber === 0} onClick={() => deleteSelectedTasks(props.listId)} >DELETE</button >

            <button className='Task-button' disabled={(selectedTaskRefsNumber + TaskRefsOfListIdSize) > MAX_TASK_REFS_PER_LIST || selectedTaskRefsNumber === 0} onClick={() => duplicateSelectedTaskRefs(props.listId)}>DUPLICATE</button>

            <button className='Task-button' disabled={(selectedTaskRefsNumber + TaskRefsOfListIdSize) > MAX_TASK_REFS_PER_LIST || selectedTaskRefsNumber === 0} onClick={() => copyByReferenceSelectedTaskRefs(props.listId)} >COPY BY REF</button>

            <button className='Task-button' disabled={selectedTaskRefsNumber === 0 || !((taskRefs.size - TaskRefsOfListIdSize + selectedTaskRefsNumber) <= MAX_TASK_REFS_PER_LIST)} onClick={() => moveSelectedTasks(props.listId)} > MOVE</button >
        </>
    )
}
export { TaskButtons }