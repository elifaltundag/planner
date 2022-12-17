import React from "react";

// Design - SCSS
import "../../design/components/new-task.scss";

// Props interface
import { NewTaskProps } from "../model/interfaces";

function NewTask({taskDef, setTaskDef, inputRef, handleChange, handleSubmit}: NewTaskProps) {

    return (
        <form 
            className="new-task" 
            onSubmit={(e)  => handleSubmit(e)}
        >
            <input 
                ref={inputRef}
                type="text" 
                value={taskDef}
                placeholder="Enter a task" 
                className="new-task__input"
                onChange={(e) => handleChange(e)}
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