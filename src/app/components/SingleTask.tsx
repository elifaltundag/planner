import React, { useState, useRef } from "react";


import "../../design/components/single-task.scss"
/* import { Status } from "../model/dataStructures"; */

import { updateTaskDefinition} from "../functions/tasksDataFunctions";

import { SingleTaskProps } from "../model/componentPropsInterfaces";
import { Draggable } from "react-beautiful-dnd";
import { MdDelete, MdSave } from "react-icons/md"

import TextareaAutosize  from "react-textarea-autosize";
import DeletePopUp from "./DeletePopUp";

function SingleTask({task, index, tasksData, setTasksData}: SingleTaskProps) {
    const [deleteIsClicked, setDeleteIsClicked] = useState<boolean>(false)
    const [taskDefinition, setTaskDefinition] = useState<string>(task.definition)
    
    // Generate task Ref 
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    /* function handleDelete(taskId: string) {
        // todo
    } */

    const inputStyles: React.CSSProperties = {
        /* backgroundColor: "yellow" */
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
                            <TextareaAutosize className = "single-task__definition__textarea"
                                ref = {textAreaRef}
                                value = {taskDefinition}
                                onChange = {() => setTaskDefinition(textAreaRef.current?.value || "")}
                                /* style = {inputStyles} */
                            />
                            <button 
                                className = "single-task__definition__btn"
                                type = "submit"
                            >
                                <MdSave />
                            </button>
                        </div>

                        <button className = "btn__delete-task"
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