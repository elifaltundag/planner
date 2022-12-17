import React from "react";

import TaskView from "./TaskView";
import { Task, ListProps } from "../model/interfaces";

import "../../design/components/list.scss"

function List({ status, taskList , handleStatusChange, handleDelete }: ListProps) {
    const styles:React.CSSProperties = {
        backgroundColor: `var(--clr-bg-${status})`,
        color: `var(--clr-txt-${status})`
    }

    // Replaces "-" with " "
    function generateListTitle(status: string): string {
        let title = ""

        for (let i = 0; i < status.length; i++) {
            const char = status[i] === "-" ? " " : status[i]
            
            title += char
        }

        return title
    }

    return (
        <div className={`${status}-list`} style={styles}>
            <h2 className={`${status}-list__title`}>
                {generateListTitle(status)}
            </h2>

            
            {taskList.map((task: Task) => {
                return (
                    <TaskView
                        definition={task.definition}
                        status={task.status}
                        dateAdded={task.dateAdded}
                        handleStatusChange={handleStatusChange}
                        handleDelete={handleDelete} />)
            })}
            



        </div>
    )
}


export default List