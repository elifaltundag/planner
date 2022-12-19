import React, { useRef } from "react";
/* import { TaskViewProps } from "../model/interfaces"; */

import "../../design/components/task.scss"
import { TaskViewProps } from "../model/componentPropsInterfaces";
import { Status } from "../model/dataStructures";

function TaskView({task, taskList, setTaskList, handleDelete, handleEdit, handleTurnEditOn}: TaskViewProps) {
    const taskRef = useRef<HTMLInputElement>(null)

    

    return (
        <form 
            className="task" 
        >   
            <div>
                {task.isEditOn 
                    ? (<>
                            <input 
                                ref={taskRef}
                                type="text"
                                defaultValue={task.definition}
                            />
                            <button 
                                className="btn__save-task-def"
                                onClick={(e) => handleEdit(e, task.dateAdded, taskRef)}
                            >
                                Save
                            </button>
                        </>) 
                    : (<p onClick={() => {
                        console.log("this reruns")
                        handleTurnEditOn(task.dateAdded)}}>{task.definition}</p>)
                }

            </div>

            <select
                value={task.status}
            >
                <option value={Status.TODO}>TO DO</option>
                <option value={Status.INPROGRESS}>IN PROGRESS</option>
                <option value={Status.DONE}>DONE</option>

            </select>
            
            <button onClick={() => handleDelete(task.dateAdded)}>Delete</button>
        </form>

    )
}

export default TaskView