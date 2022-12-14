import React, { useState, useRef, useEffect, useContext } from "react";


import "../../design/components/single-task.scss"
/* import { Status } from "../model/dataStructures"; */

import { updateTaskDefinition} from "../functions/editTasksData";

import { SingleTaskProps } from "../model/componentsProps";
import { Draggable } from "react-beautiful-dnd";
import { MdDelete, MdCheckCircle, MdEdit } from "react-icons/md"

import TextareaAutosize  from "react-textarea-autosize";
import DeletePopUp from "./DeletePopUp";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";

function SingleTask({task, index, tasksData, setTasksData}: SingleTaskProps) {
    const [isEditModeOn, setIsEditModeOn] = useState<boolean>(false)
    const [deleteIsClicked, setDeleteIsClicked] = useState<boolean>(false)
    const [taskDefinition, setTaskDefinition] = useState<string>(task.definition)

    const { colorTheme } = useContext(ColorThemeContext)  

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
        setIsEditModeOn(false)
        updateTaskDefinition(setTasksData, task.id, taskDefinition);
    }


    function handleHitReturn(e: React.KeyboardEvent, formRef:  React.RefObject<HTMLFormElement>) {
        if (e.code === "Enter" && !e.shiftKey) {
            e.preventDefault();
            formRef.current?.requestSubmit();
            return
        }        
    }

    function handleFocus() {
        const taskDefinitionLength = textAreaRef.current?.value.length;
        textAreaRef.current?.focus()

        // Put the text cursor at the end of the text when focused on
        if (taskDefinitionLength) {
            textAreaRef.current?.setSelectionRange(taskDefinitionLength, taskDefinitionLength)
        }
    }


    useEffect(() => {
        isEditModeOn ? handleFocus() : textAreaRef.current?.blur()
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
                        data-colorTheme = {colorTheme}                        
                    >
                        <form 
                            className = "single-task" 
                            ref = {formRef}
                            onSubmit = {(e) => handleSubmit(e)}
                            data-colorTheme = {colorTheme}
                        >   

                            {isEditModeOn ? (
                                <TextareaAutosize className = "single-task__definition single-task__textarea"
                                    ref = {textAreaRef}
                                    value = {taskDefinition}
                                    onChange = {(e) => handleTaskDefinitionChange(e)}
                                    onKeyDown = {(e) => handleHitReturn(e, formRef)}
                                    data-colorTheme = {colorTheme}
                            />
                            ) : (
                                <p className = "single-task__definition single-task__paragraph">
                                    {taskDefinition}
                                </p>
                            )}
                            
                            


                            {isEditModeOn ? (
                                <button className = "single-task__btn--save"
                                    type = "submit"
                                    data-colorTheme = {colorTheme}
                                >
                                    <MdCheckCircle />
                                </button>
                            ) : (
                                <button className = "single-task__btn--save"
                                    type = "button"
                                    onClick = {(e) => {
                                        e.preventDefault()
                                        setIsEditModeOn(true)
                                    }}
                                    data-colorTheme = {colorTheme}
                                >
                                    <MdEdit />
                                </button>
                            )}
                            
                            

                            <button className = "single-task__btn--delete"
                                type = "button"
                                onClick = {() => setDeleteIsClicked(true)}
                                data-colorTheme = {colorTheme}
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