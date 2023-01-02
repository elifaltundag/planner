import React, { useState, useRef } from "react";

import "../../design/components/single-task.scss"
/* import { Status } from "../model/dataStructures"; */

import { updateTaskDefinition } from "../functions/tasksDataFunctions";

import { SingleTaskProps } from "../model/componentPropsInterfaces";
import { Draggable } from "react-beautiful-dnd";
import { MdDelete, MdSave } from "react-icons/md"

function SingleTask({task, index, tasksData, setTasksData}: SingleTaskProps) {
    const [taskDefinition, setTaskDefinition] = useState<string>(task.definition)
    
    // Generate task Ref 
    const taskRef = useRef<HTMLInputElement>(null)

    function handleDelete(taskId: string) {
        // todo
    }

    const inputStyles: React.CSSProperties = {
        backgroundColor: "yellow"
    }


    return (
        <Draggable 
            draggableId = {task.id} 
            index = {index} 
        >
            {
                (provided, snapshot) => (
                    <form 
                        className = "single-task" 
                        ref = {provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        data-isDragging = {snapshot.isDragging}
                        onSubmit = {() => updateTaskDefinition(setTasksData, task.id, taskDefinition)}
                    >   
                        <div className = "single-task__definition">
                            <input 
                                ref = {taskRef}
                                type = "text"
                                value = {taskDefinition}
                                onChange = {() => setTaskDefinition(taskRef.current?.value || "")}
                                style = {inputStyles}
                            />
                            <button 
                                className="btn__save-task-def"
                                type = "submit"
                            >
                                <MdSave />
                            </button>
                        </div>

                        <button className = "btn__delete-task"
                            type = "button"
                            onClick = {() => handleDelete(task.id)}
                        >
                            <MdDelete />
                        </button>
                    </form>
                )
            }
        </Draggable>
    )
}

export default SingleTask