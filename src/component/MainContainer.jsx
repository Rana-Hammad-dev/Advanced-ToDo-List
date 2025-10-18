import React from 'react';
import './Style.css';

const MainContainer = ({ mode, task, setTask }) => {

    // ✅ Delete Task
    function handleDelete(id) {
        const updatedTasks = task.filter((t) => t.id !== id);
        setTask(updatedTasks);
    }

    // ✅ Toggle Complete
    function handleComplete(id) {
        const updatedTasks = task.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
        );
        setTask(updatedTasks);
    }

    return (
        <div className={mode ? "maincontainer" : "maincontainer border"}>
            {task.length === 0 ? (
                <p className="no-task">No tasks yet!</p>
            ) : (
                task.map((eachtask) => (
                    <div className="task" key={eachtask.id}>
                        <div className="left-box">
                            <input
                                type="checkbox"
                                checked={eachtask.completed || false}
                                onChange={() => handleComplete(eachtask.id)}
                            />
                            <div className="info">
                                <h3 className={eachtask.completed ? "completed" : ""}>
                                    {eachtask.title}
                                </h3>
                                <div className="infos">
                                    <span className="catagory">{eachtask.catagory}</span>
                                    <span className="priority">{eachtask.priority}</span>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">
                            <button
                                className="btn-color"
                                onClick={() => handleDelete(eachtask.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MainContainer;
