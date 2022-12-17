import React from "react";
import { TaskViewProps } from "../model/interfaces";

function TaskView({definition, status, dateAdded, handleStatusChange}: TaskViewProps) {

    return (
        <form>
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

        </form>

    )
}

export default TaskView