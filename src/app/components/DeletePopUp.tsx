import React, { useContext } from "react";

import "../../design/components/delete-pop-up.scss";

import { DeletePopUpProps } from "../model/componentsProps";

import { deleteTask, deleteTasksInList } from "../functions/editTasksData";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";

export default function DeletePopUp({tasksData, setTasksData, taskId, listStatus, setDeleteIsClicked}: DeletePopUpProps) {
    const { colorTheme } = useContext(ColorThemeContext);

    let warningText = "This is a permanent action. Are you sure you want to delete "

    if (taskId) {
        warningText += " this task?"
    } else if (listStatus) {
        warningText += " every task in this list?"
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
                    if (taskId) {
                        deleteTask(tasksData, setTasksData, taskId)
                    } else if (listStatus) {
                        deleteTasksInList(tasksData, setTasksData, listStatus)
                        setDeleteIsClicked(false)
                    }
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