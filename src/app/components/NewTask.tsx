import React, { useState } from "react";

// Design - SCSS
import "../../design/components/new-task.scss";

// Types, interfaces, classes and enums
import { Status, Task } from "../model/dataStructures";
import { NewTaskProps } from "../model/componentPropsInterfaces";

// Functions
import { addNewTask } from "../functions/tasksDataFunctions";

import { MdOutlineAddCircle } from "react-icons/md";



function NewTask({newTaskInputRef, setTasksData}: NewTaskProps) {
    const [newTaskDef, setNewTaskDef] = useState<string>(""); 


    function handleTaskDefinitionChange(e: React.FormEvent<HTMLInputElement>) {
        setNewTaskDef(e.currentTarget.value);
    }

    function handleNewTaskSubmit(e: React.FormEvent<HTMLFormElement>) {
        // Prevent the form to reset the page on submission
        e.preventDefault();

        // Create a new instance of Task
        const newTask = new Task(newTaskDef.trim(), Status.TODO, Date.now().toString())
        
        // Add the new task to tasksData
        addNewTask(setTasksData, newTask)

        // Reset input area
        setNewTaskDef("")

        newTaskInputRef.current?.focus()
    }

    return (
        <div className = "new-task__container">
            <form 
                className = "new-task" 
                onSubmit = {(e) => handleNewTaskSubmit(e)} 
            >
                <input 
                    ref = {newTaskInputRef}
                    value = {newTaskDef}            
                    placeholder = "Enter a task" 
                    className = "new-task__input"
                    onChange = {(e) => handleTaskDefinitionChange(e)}
                />
                <button
                    className = "new-task__btn"
                    type = "submit"
                >
                    <MdOutlineAddCircle />
                </button>
            </form>
        </div>
    )
}

export default NewTask