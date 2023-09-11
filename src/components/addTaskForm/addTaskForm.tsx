import React, { useContext } from "react"
import TasksContext from "../../TasksContext"

const { createNewTask } = useContext(TasksContext)

const addTaskForm = () => {
    const [titleField, setTitleField] = React.useState("")

    const handleTitleFieldChange = (e: any) => {
        setTitleField(e.target.value)
    }
    function handleSubmit() {
        createNewTask(titleField)
    }

    return (<form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name of your Task' onChange={handleTitleFieldChange} />
        <button className='Task-button' type="submit">ADD</button>
    </form>)
}
export {
    addTaskForm
}