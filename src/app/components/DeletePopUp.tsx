import React, { useContext, useEffect, useRef } from "react";

import "../../design/components/delete-pop-up.scss";

import { DeletePopUpProps } from "../model/componentsProps";
import { MdWarning } from "react-icons/md";

import { deleteTask, deleteTasksInList, resetTasksData } from "../functions/editTasksData";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";


export default function DeletePopUp({tasksData, setTasksData, taskId, listStatus, setIsDeleteClicked}: DeletePopUpProps) {
    const { colorTheme } = useContext(ColorThemeContext);
    const deletePopUpRef = useRef<HTMLDivElement>(null)

    let warningText = "Are you sure you want to "

    if (taskId) {
        warningText += "delete this task?"
    } else if (listStatus) {
        warningText += "delete each task on this list?"
    } else {
        warningText += "reset your Kanban board?"
    }

    // Focus on delete pop-up after first render
    useEffect(() => {
        deletePopUpRef.current?.focus()
    }, [])


    // Close delete pop-up when the user clicks on outside
    useEffect(() => {
        function closeDeletePopUpWhenClickedOnOutside(e: MouseEvent) {
            if (e.target instanceof Element && !deletePopUpRef.current?.contains(e.target)) {
                setIsDeleteClicked(false)
            }
        }

        document.addEventListener("mousedown", closeDeletePopUpWhenClickedOnOutside)

        return () => (document.removeEventListener("mousedown", closeDeletePopUpWhenClickedOnOutside))
    }) 


    return (
        <div className="delete-pop-up"
            data-colorTheme = {colorTheme}
            ref = {deletePopUpRef}
            tabIndex = {0}
        >
            <p className="delete-pop-up__warning">
                <span className="delete-pop-up__warning__icon"><MdWarning /></span>
                
                This is a permanent action.
                <br />
                {warningText}
            </p>

            <button className="delete-pop-up__btn-delete" 
                onClick = {() => {
                    if (tasksData && taskId) {
                        deleteTask(tasksData, setTasksData, taskId)
                    } else if (tasksData && listStatus !== undefined) {
                        deleteTasksInList(tasksData, setTasksData, listStatus)
                        setIsDeleteClicked(false)
                    } else {
                        resetTasksData(setTasksData)
                        setIsDeleteClicked(false)
                    }
                }}
            >
                DELETE
            </button>

            <button className="delete-pop-up__btn-keep"
                onClick = {() => setIsDeleteClicked(false)}
            >
                CANCEL
            </button>
        </div>
    )
}