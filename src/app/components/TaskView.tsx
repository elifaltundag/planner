import React, { useRef } from "react";
/* import { TaskViewProps } from "../model/interfaces"; */

import "../../design/components/task.scss"
import { TaskViewProps } from "../model/componentPropsInterfaces";
import { Status } from "../model/dataStructures";

function TaskView({task, taskList, setTaskList}: TaskViewProps) {
    const taskRef = useRef(null)

    function handleDelete(id: number) {
        let newTaskList = {...taskList}
        delete newTaskList[id]

        setTaskList(newTaskList)
    }

    return (
        <form className="task">
            {task.isEditOn 
                ? (<>
                        <input 
                            ref={taskRef}
                            type="text"
                            defaultValue={task.definition}
                        />
                        <button className="btn__save-task-def">
                            Save
                        </button>
                    </>) 
                : (<p>{task.definition}</p>)
            }

            <select
                value={task.status}
            >
                <option value={Status.TODO}>TO DO</option>
                <option value={Status.INPROGRESS}>IN PROGRESS</option>
                <option value={Status.DONE}>DONE</option>

            </select>
            
            <button onClick={() => handleDelete(task.dateAdded)}>Delete</button>
            {/* <input 
                ref={taskRef}
                type="text" 
                defaultValue={definition} 
                onChange={(e) => handleTaskDefinitionChange(e, dateAdded, taskRef)} 
            />
            
            <select 
                value={status}
                onChange={(e) => handleStatusChange(e, dateAdded)}
            >
                <option value={0}>TO DO</option>
                <option value={1}>IN PROGRESS</option>
                <option value={2}>DONE</option>
            </select>
            
            <button onClick={() => handleDelete(dateAdded)}>Delete</button> */}
        </form>

    )
}

export default TaskView