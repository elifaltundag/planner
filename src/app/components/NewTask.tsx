import React, { useState } from "react";

// Design - SCSS
import "../../design/components/new-task.scss";

// Types, interfaces, classes and enums
import { Status, Task, NewTaskProps } from "../model/dataStructures";

import { addNewTaskToTaskList } from "../functions/taskListFuncs";

function NewTask({inputRef, taskList, setTaskList}: NewTaskProps) {
    const [newTaskDef, setNewTaskDef] = useState<string>(""); 


    function handleTaskDefinitionChange(e: React.FormEvent<HTMLInputElement>) {
        setNewTaskDef(e.currentTarget.value);
    }

    function handleNewTaskSubmit(e: React.FormEvent<HTMLFormElement>) {
        // Prevent the form to reset the page on submission
        e.preventDefault();

        // Create a new instance of Task
        const newTask = new Task(newTaskDef, Status.TODO, Date.now())
        
        // Add the new task to taskList
        setTaskList(addNewTaskToTaskList(taskList, newTask))

        // Reset input area
        setNewTaskDef("")

    }

    return (
        <form 
            ref={inputRef}
            className="new-task" 
            onSubmit={(e) => handleNewTaskSubmit(e)} 
        >
            <input 
                ref={inputRef}
                type="text" 
                value={newTaskDef}
                placeholder="Enter a task" 
                className="new-task__input"
                onChange={(e) => handleTaskDefinitionChange(e)}
            />
            <button
                className="new-task__btn"
                type="submit"
            >
                Add
            </button>
        </form>
       
    )
}

export default NewTask