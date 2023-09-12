import React, { useContext } from "react"
import TasksContext from "../../TasksContext"


const AddTaskForm = () => {
    const { createNewTask } = useContext(TasksContext)

    const [titleField, setTitleField] = React.useState("")

    const handleTitleFieldChange = (e: any) => {
        setTitleField(e.target.value)
    }
    function handleSubmit() {
        if (titleField) {
            createNewTask(titleField)
        }
        else {
            alert("Please mind naming your task before creating it.")
        }
    }

    return (
        <div >
            <input type='text' placeholder='Name of your Task' onChange={handleTitleFieldChange} />
            <button className='Task-button' onClick={handleSubmit}>ADD</button>
        </div >
    )
}
export {
    AddTaskForm
}