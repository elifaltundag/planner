import React from "react";

// Design - SCSS
import "../../design/components/new-task.scss";

// Props interface
import { NewTaskProps } from "../model/interfaces";

function NewTask({taskDef, setTaskDef, handleChange, handleSubmit, inputRef}: NewTaskProps) {
    console.log(taskDef)

    return (
        <form className="new-task">
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
                onClick={handleSubmit}
            >
                Add
            </button>
        </form>
    )
}

export default NewTask