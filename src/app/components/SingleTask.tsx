import React, { useState, useRef, useEffect } from "react";


import "../../design/components/single-task.scss"
/* import { Status } from "../model/dataStructures"; */

import { updateTaskDefinition} from "../functions/tasksDataFunctions";

import { SingleTaskProps } from "../model/componentPropsInterfaces";
import { Draggable } from "react-beautiful-dnd";
import { MdDelete, MdCheckCircle, MdEdit } from "react-icons/md"

import TextareaAutosize  from "react-textarea-autosize";
import DeletePopUp from "./DeletePopUp";

function SingleTask({task, index, tasksData, setTasksData}: SingleTaskProps) {
    const [isEditModeOn, setIsEditModeOn] = useState<boolean>(false)
    const [deleteIsClicked, setDeleteIsClicked] = useState<boolean>(false)
    const [taskDefinition, setTaskDefinition] = useState<string>(task.definition)

    // Generate task Ref 
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    
    // FUNCTIONS
    function handleTaskDefinitionChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
        if (!isEditModeOn) {
            setIsEditModeOn(true)
        }
        setTaskDefinition(textAreaRef.current?.value || "")
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        updateTaskDefinition(setTasksData, task.id, taskDefinition);
        console.log(textAreaRef.current)
        
    }


    function handleHitReturn(e: React.KeyboardEvent, formRef:  React.RefObject<HTMLFormElement>) {
        if (e.code === "Enter" && !e.shiftKey) {
            e.preventDefault();
            formRef.current?.submit();
        }
    }




    useEffect(() => {
        isEditModeOn ? textAreaRef.current?.focus() : textAreaRef.current?.blur()
    }, [isEditModeOn])


    return (
        <Draggable 
            draggableId = {task.id} 
            index = {index} 
        >
            {
                (provided, snapshot) => (
                    <div className="single-task__container"
                        ref = {provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        data-isDragging = {snapshot.isDragging}
                    >
                        <form 
                            className = "single-task" 
                            ref = {formRef}
                            onSubmit = {(e) => handleSubmit(e)}
                        >   
                            
                            <TextareaAutosize className = "single-task__textarea"
                                ref = {textAreaRef}
                                value = {taskDefinition}
                                onChange = {(e) => handleTaskDefinitionChange(e)}
                                onKeyDown = {(e) => handleHitReturn(e, formRef)}
                            />


                            {isEditModeOn ? (
                                <button 
                                    className = "single-task__btn--save"
                                    type = "submit"
                                    onClick = {() => setIsEditModeOn(false)}
                                >
                                    <MdCheckCircle />
                                </button>
                            ) : (
                                <button
                                    className = "single-task__btn--save"
                                    type = "button"
                                    onClick = {() => setIsEditModeOn(true)}
                                >
                                    <MdEdit />
                                </button>
                            )}
                            
                            

                            <button className = "single-task__btn--delete"
                                type = "button"
                                onClick = {() => setDeleteIsClicked(true)}
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
                    </div>
                )
            }
        </Draggable>
    )
}

export default SingleTask