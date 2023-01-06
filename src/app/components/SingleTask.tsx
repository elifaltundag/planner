import React, { useState, useRef } from "react";


import "../../design/components/single-task.scss"
/* import { Status } from "../model/dataStructures"; */

import { updateTaskDefinition} from "../functions/tasksDataFunctions";

import { SingleTaskProps } from "../model/componentPropsInterfaces";
import { Draggable } from "react-beautiful-dnd";
import { MdDelete, MdCheckCircle } from "react-icons/md"

import TextareaAutosize  from "react-textarea-autosize";
import DeletePopUp from "./DeletePopUp";

function SingleTask({task, index, tasksData, setTasksData}: SingleTaskProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [deleteIsClicked, setDeleteIsClicked] = useState<boolean>(false)
    const [taskDefinition, setTaskDefinition] = useState<string>(task.definition)

    
    // Generate task Ref 
    const textAreaRef = useRef<HTMLTextAreaElement>(null)


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
                        
                        <TextareaAutosize className = "single-task__textarea"
                            ref = {textAreaRef}
                            value = {taskDefinition}
                            onChange = {() => setTaskDefinition(textAreaRef.current?.value || "")}
                            /* style = {inputStyles} */
                            onFocus = {() => setIsFocused(true)}
                            onBlur = {() => setIsFocused(false)}
                        />


                        {isFocused && (
                            <button 
                                className = "single-task__btn--save"
                                type = "submit"
                                onFocus = {() => setIsFocused(true)}
                                onBlur = {() => setIsFocused(false)}
                            >
                                <MdCheckCircle />
                            </button>
                        )}
                        
                        

                        <button className = "single-task__btn--delete"
                            type = "button"
                            onClick = {() => setDeleteIsClicked(true) /* deleteTask(tasksData, setTasksData, task.id) */}
                        >
                            <MdDelete />
                        </button>


                        {deleteIsClicked && <DeletePopUp 
                            tasksData = {tasksData}
                            setTasksData = {setTasksData}
                            taskId = {task.id}
                            setDeleteIsClicked = {setDeleteIsClicked}
                        />}
                    </form>
                )
            }
        </Draggable>
    )
}

export default SingleTask