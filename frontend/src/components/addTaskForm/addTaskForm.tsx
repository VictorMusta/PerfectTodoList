import React, { useContext } from "react"
import TasksContext from "../../TasksContext"


const AddTaskForm = () => {
    const { createNewTask, taskRefs } = useContext(TasksContext)
    const [numberOfTaskRefsInFirstList, setNumberOfTaskRefsInList] = React.useState(0);
    const [titleField, setTitleField] = React.useState("")

    React.useEffect(() => {

        let NumberOfTaskRefsInFirstList = 0;

        for (let [, value] of taskRefs) {
            if (value.idList === 1) {
                NumberOfTaskRefsInFirstList++
            }
        }
        setNumberOfTaskRefsInList(NumberOfTaskRefsInFirstList)

    }, [taskRefs]);

    const handleTitleFieldChange = (e: any) => {
        setTitleField(e.target.value)
    }
    function handleSubmit() {
        createNewTask(titleField)

    }

    return (
        <div >
            <input type='text' placeholder='Name of your Task' onChange={handleTitleFieldChange} />
            <button className='Task-button' disabled={titleField === "" || numberOfTaskRefsInFirstList >= 6} onClick={handleSubmit}>ADD</button>
        </div >
    )
}
export {
    AddTaskForm
}