import React, { useRef } from "react";
/* import { TaskViewProps } from "../model/interfaces"; */

import "../../design/components/task.scss"

function TaskView(/* {definition, status, dateAdded, handleStatusChange, handleDelete, handleTaskDefinitionChange}: TaskViewProps */) {
    const taskRef = useRef(null)

    return (
        <form className="task" onSubmit={(e) => e.preventDefault()}>
            {/* <input 
                ref={taskRef}
                type="text" 
                defaultValue={definition} 
                onChange={(e) => handleTaskDefinitionChange(e, dateAdded, taskRef)} 
            />
            
            <select 
                value={status}
                onChange={(e) => handleStatusChange(e, dateAdded)}
            >
                <option value={0}>TO DO</option>
                <option value={1}>IN PROGRESS</option>
                <option value={2}>DONE</option>
            </select>
            
            <button onClick={() => handleDelete(dateAdded)}>Delete</button> */}
        </form>

    )
}

export default TaskView