import React, { useContext } from "react";

import "../../design/components/delete-pop-up.scss";

import { DeletePopUpProps } from "../model/componentsProps";

import { deleteTask, deleteTasksInList, resetTasksData } from "../functions/editTasksData";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";

export default function DeletePopUp({tasksData, setTasksData, taskId, listStatus, setDeleteIsClicked}: DeletePopUpProps) {
    const { colorTheme } = useContext(ColorThemeContext);

    let warningText = "This is a permanent action. Are you sure you want to "

    if (taskId) {
        warningText += "delete this task?"
    } else if (listStatus !== undefined) {
        warningText += "delete each task on this list?"
    } else {
        warningText += "reset your lists?"
    }

    return (
        <div className = "delete-pop-up"
            data-colorTheme = {colorTheme}
        >
            <p className = "delete-pop-up__warning">
                {warningText}
            </p>

            <button className = "delete-pop-up__btn-delete" 
                onClick = {() => {
                    if (tasksData && taskId) {
                        deleteTask(tasksData, setTasksData, taskId)
                    } else if (tasksData && listStatus !== undefined) {
                        deleteTasksInList(tasksData, setTasksData, listStatus)
                        setDeleteIsClicked(false)
                    } else {
                        resetTasksData(setTasksData)
                        setDeleteIsClicked(false)
                    }
                    console.log(listStatus)
                }}
            >
                DELETE
            </button>

            <button className = "delete-pop-up__btn-keep"
                onClick = {() => setDeleteIsClicked(false)}
            >
                CANCEL
            </button>
        </div>
    )
}