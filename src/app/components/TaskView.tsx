import React from "react";
import { TaskViewProps } from "../model/interfaces";

function TaskView({definition, status, dateAdded}: TaskViewProps) {

    return (
        <form>
            <input 
                type="text" 
                defaultValue={definition}   
            />
            <select value={status}>
                <option value="toDo">TO DO</option>
                <option value="inProgress">IN PROGRESS</option>
                <option value="done">DONE</option>
            </select>

        </form>

    )
}

export default TaskView