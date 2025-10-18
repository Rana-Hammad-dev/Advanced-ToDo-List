import React, { useState } from 'react'
import './Style.css'

const NewTask = ({ setTask, task }) => {

    const [title, setTitle] = useState("")
    const [catagory, setcatagory] = useState("")
    const [priority, setpriority] = useState("")
    const [error, setError] = useState("")


    function handleSubmit(e) {
        e.preventDefault();

        const Duplicate = task.some(t => t.title.toLowerCase() === title.toLowerCase())

        if (Duplicate) {
            setError("This Task Already exist!")
        } else {

            if (catagory == "") {
                setError("Please select Catagory")
            } else if (priority == "") {
                setError("Please select Priority")
            } else {
                const newTask = {
                    id: Date.now(),
                    title,
                    catagory,
                    priority,
                    completed: false,
                };

                setTask([...task, newTask])

                setTitle("");
                setcatagory("");
                setpriority("");
                setError("")
            }
        }
    }

    return (
        <div className='newtask'>
            <form onSubmit={handleSubmit}>
                <input required type="text" name="task" placeholder='Enter a Task' onChange={(e) => setTitle(e.target.value)} value={title} />
                <div className="options">
                    <select name="catagory" onChange={(e) => setcatagory(e.target.value)} value={catagory}>
                        <option value="">Catagory</option>
                        <option value="study">Study</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                    </select>
                    <select name="priority" onChange={(e => setpriority(e.target.value))} value={priority}>
                        <option value="">Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <button type="submit">Add Task</button>
                </div>
                <p>{error}</p>
            </form>
        </div>
    )
}

export default NewTask
