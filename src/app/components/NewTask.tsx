import React, { useState, useContext, useEffect } from "react";

// Design - SCSS
import "../../design/components/new-task.scss";

// Types, interfaces, classes and enums
import { Task } from "../model/tasksData";
import { Status } from "../model/enums";
import { NewTaskProps } from "../model/componentsProps";

// Functions
import { addNewTask } from "../functions/editTasksData";

import { MdOutlineAddCircle } from "react-icons/md";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";

function NewTask({newTaskInputRef, setTasksData}: NewTaskProps) {
    const [newTaskDef, setNewTaskDef] = useState<string>(""); 
    const { colorTheme } = useContext(ColorThemeContext)  

    function handleTaskDefinitionChange(e: React.FormEvent<HTMLInputElement>) {
        setNewTaskDef(e.currentTarget.value);
    }

    function handleNewTaskSubmit(e: React.FormEvent<HTMLFormElement>) {
        // Prevent the form to reset the page on submission
        e.preventDefault();

        // Create a new instance of Task
        const newTask = new Task(newTaskDef.trim(), Status.TODO, Date.now().toString())
        
        // Add the new task to tasksData
        if (newTask.definition.length > 0) {
            addNewTask(setTasksData, newTask)
        }

        // Reset input area
        setNewTaskDef("")
    }

    useEffect(() => {
        function unfocus(e: MouseEvent) {
            if (e.target instanceof Element && !newTaskInputRef.current?.contains(e.target)) {
                newTaskInputRef.current?.blur()
            }
        }

        document.addEventListener("mousedown", unfocus)

        return () => document.removeEventListener("mousedown", unfocus)
    })

    return (
        <div className="new-task__container"
            data-colorTheme = {colorTheme}  
        >
            <form className="new-task" 
                onSubmit = {(e) => handleNewTaskSubmit(e)} 
                data-colorTheme = {colorTheme}
            >
                <input className="new-task__input"
                    ref = {newTaskInputRef}
                    value = {newTaskDef}            
                    placeholder = "Enter a new task" 
                    onChange = {(e) => handleTaskDefinitionChange(e)}
                    data-colorTheme = {colorTheme}
                />
                <button className="new-task__btn"
                    type = "submit"
                    data-colorTheme = {colorTheme}
                >
                    <MdOutlineAddCircle />
                </button>
            </form>
        </div>
    )
}

export default NewTask