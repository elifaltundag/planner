import React, { useState, useRef, useEffect, useContext } from "react";


import "../../design/components/single-task.scss"

import { updateTaskDefinition} from "../functions/editTasksData";

import { SingleTaskProps } from "../model/componentsProps";
import { Draggable } from "react-beautiful-dnd";
import { MdDelete, MdCheckCircle, MdEdit } from "react-icons/md"

import { Keyboard } from "../model/enums";

import TextareaAutosize  from "react-textarea-autosize";
import DeletePopUp from "./DeletePopUp";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";

function SingleTask({task, index, tasksData, setTasksData}: SingleTaskProps) {
    // STATES
    const [isEditModeOn, setIsEditModeOn] = useState<boolean>(false)
    const [isDeleteClicked, setIsDeleteClicked] = useState<boolean>(false)
    const [taskDefinition, setTaskDefinition] = useState<string>(task.definition)


    // COLOR THEME CONTEXT
    const { colorTheme } = useContext(ColorThemeContext)  


    // REFS
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const btnDeleteRef = useRef<HTMLButtonElement>(null)    


    // FUNCTIONS
    function handleTaskDefinitionChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
        if (!isEditModeOn) {
            setIsEditModeOn(true)
        }

        setTaskDefinition(textAreaRef.current?.value.replaceAll("\n", "") || "")
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        setIsEditModeOn(false)
        updateTaskDefinition(setTasksData, task.id, taskDefinition);
    }

    function handleTextAreaKeyUp(e: React.KeyboardEvent, formRef: React.RefObject<HTMLFormElement>/* , containerRef: (element: HTMLElement | null) => void */) {
        if (e.code === Keyboard.ENT && !e.shiftKey) {
            e.preventDefault();
            formRef.current?.requestSubmit();
        } else if (e.code === Keyboard.ESC) {
            setIsEditModeOn(false)
        }       
    }


    // Enable editting without mouse, keyboard only
    function handleKeyboardOperations(e: React.KeyboardEvent<HTMLDivElement>) {       
        if (!isEditModeOn) {
            if (e.code === Keyboard.ENT && !isDeleteClicked) { 
                setIsEditModeOn(true)
            } else if (e.code === Keyboard.DEL) {
                setIsDeleteClicked(true)
            } 
        } 
    }


    // Put the text cursor at the end of the text when focused on
    useEffect(() => {
        function handleTextAreaFocus() {
            const taskDefinitionLength = task.definition.length;
            textAreaRef.current?.focus()
    
            if (taskDefinitionLength) {
                textAreaRef.current?.setSelectionRange(taskDefinitionLength, taskDefinitionLength)
            }
        }

        isEditModeOn ? handleTextAreaFocus() : textAreaRef.current?.blur()
    }, [isEditModeOn, task.definition.length])


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
                        onKeyUp = {(e) => handleKeyboardOperations(e)}
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
                                    onKeyUp = {(e) => handleTextAreaKeyUp(e, formRef/* , provided.innerRef */)}
                                    data-colorTheme = {colorTheme}
                                    required = {true}
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
                                    onKeyDown = {(e) => {
                                        if (e.code === Keyboard.ENT) {
                                            setIsEditModeOn(false)
                                            updateTaskDefinition(setTasksData, task.id, taskDefinition);
                                        }
                                    }}
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
                                    tabIndex = {-1}
                                >
                                    <MdEdit />
                                </button>
                            )}
                            
                            

                            <button className = "single-task__btn--delete"
                                type = "button"
                                onClick = {() => setIsDeleteClicked(true)}
                                onKeyUp = {(e) => {
                                    if (isEditModeOn && e.code === Keyboard.TAB) {
                                        setIsEditModeOn(false)
                                    }
                                }}
                                data-colorTheme = {colorTheme}
                                ref = {btnDeleteRef}
                                tabIndex = {isEditModeOn ? 0 : -1}
                            >
                                <MdDelete />
                            </button>


                            {isDeleteClicked && <DeletePopUp 
                                tasksData = {tasksData}
                                setTasksData = {setTasksData}
                                taskId = {task.id}
                                setIsDeleteClicked = {setIsDeleteClicked}
                                
                            />}
                        </form>
                    </div>
                )
            }
        </Draggable>
    )
}

export default SingleTask