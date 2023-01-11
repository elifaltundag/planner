import React, { useContext } from "react";

import "../../design/components/delete-pop-up.scss";

import { DeletePopUpProps } from "../model/componentsProps";

import { deleteTask } from "../functions/editTasksData";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";

export default function DeletePopUp({tasksData, setTasksData, taskId, setDeleteIsClicked}: DeletePopUpProps) {
    const { colorTheme } = useContext(ColorThemeContext)  

    return (
        <div className = "delete-pop-up"
            data-colorTheme = {colorTheme}
        >
            <p className = "delete-pop-up__warning">
                THIS IS A PERMANENT ACTION, ARE YOU SURE YOU WANT TO DELETE THIS TASK?
            </p>

            <button className = "delete-pop-up__btn-delete" onClick = {() => deleteTask(tasksData, setTasksData, taskId)}>DELETE</button>

            <button className = "delete-pop-up__btn-keep" onClick = {() => setDeleteIsClicked(false)}>CANCEL</button>
        </div>
    )
}