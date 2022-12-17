import React from "react";
import { TaskViewProps } from "../model/interfaces";

import "../../design/components/task.scss"

function TaskView({definition, status, dateAdded, handleStatusChange, handleDelete}: TaskViewProps) {

    return (
        <form className="task">
            <input 
                type="text" 
                defaultValue={definition}   
            />
            
            <select 
                value={status}
                onChange={(e) => handleStatusChange(e, dateAdded)}
            >
                <option value={0}>TO DO</option>
                <option value={1}>IN PROGRESS</option>
                <option value={2}>DONE</option>
            </select>
            
            <button onClick={() => handleDelete(dateAdded)}>Delete</button>
        </form>

    )
}

export default TaskView