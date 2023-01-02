import React from "react";

import "../../design/components/delete-pop-up.scss";

import { DeletePopUpProps } from "../model/componentPropsInterfaces";

import { deleteTask } from "../functions/tasksDataFunctions";



export default function DeletePopUp({tasksData, setTasksData, taskId, setDeleteIsClicked}: DeletePopUpProps) {
    return (
        <div className = "delete-pop-up">
            <p>THIS IS A PERMANENT ACTION, ARE YOU SURE YOU WANT TO DELETE THIS TASK?</p>

            <button onClick = {() => deleteTask(tasksData, setTasksData, taskId)}>DELETE</button>

            <button onClick = {() => setDeleteIsClicked(false)}>CANCEL</button>
        </div>
    )
}