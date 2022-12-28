import React, { useState } from "react";

// Design - SCSS
import "../../design/components/new-task.scss";

// Types, interfaces, classes and enums
import { Status, Task } from "../model/dataStructures";
import { NewTaskProps } from "../model/componentPropsInterfaces";

// Functions
import { addNewTaskToTasksData } from "../functions/tasksDataFunctions";



function NewTask({inputRef, tasksData, setTasksData}: NewTaskProps) {
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
        setTasksData(addNewTaskToTasksData(tasksData, newTask))

        // Reset input area
        setNewTaskDef("")


        inputRef.current?.focus()

        console.log("it should be doing something")
    }

    return (
        <form 
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