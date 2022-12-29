import React/* , { useState, useRef } */ from "react";
/* import { SingleTaskProps } from "../model/interfaces"; */

import "../../design/components/single-task.scss"
import { SingleTaskProps } from "../model/componentPropsInterfaces";
/* import { Status } from "../model/dataStructures"; */

import { Draggable } from "react-beautiful-dnd";
import { MdDelete } from "react-icons/md"

function SingleTask({task, index, tasksData, setTasksData}: SingleTaskProps) {
    // Generate task Ref 
    /* const taskRef = useRef<HTMLInputElement>(null) */

    function handleDelete(taskId: string) {
        // todo
        
        /*
        Bunun çok işi var, sen şimdilik yeni yerine götüremeye bak

        */ 
    }

    /* const styles = {
        backgroundColor: `${}`
    } */
    

    return (
        <Draggable 
            draggableId = {task.dateAdded} 
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
                    >   
                        <div className = "single-task__definition">
                            {task.definition}
                            {/* {task.isEditOn 
                                ? 
                                (<>
                                        <input 
                                            ref = {taskRef}
                                            type = "text"
                                            defaultValue={task.definition}
                                        />
                                        <button 
                                            className="btn__save-task-def"
                                            onClick={() => handleTaskDefinitionEdit(task.dateAdded, taskRef)}
                                        >
                                            Save
                                        </button>
                                    </>) 
                                
                                : 
                                (<p onClick={() => handleTurnEditOn(task.dateAdded, taskRef)}>
                                    {task.definition}
                                </p>)
                            } */}

                        </div>
                        
                        <div className = "single-task__btn-delete"
                            onClick = {() => handleDelete(task.dateAdded)}>
                            <MdDelete />
                        </div>
                    </form>
                )
            }
        </Draggable>
    )
}

export default SingleTask