import React from "react";

import TaskView from "./TaskView";
import { Task, ListProps } from "../model/interfaces";

import "../../design/components/list.scss"

function List({ status, taskList , handleStatusChange }: ListProps) {
    const styles:React.CSSProperties = {
        backgroundColor: `var(--clr-bg-${status})`,
        color: `var(--clr-txt-${status})`
    }


    return (
        <div className={`${status}-list`} style={styles}>
            <h2 className={`${status}-list__title`}>{`${status.toUpperCase()}`}</h2>

            
            {taskList.map((task: Task) => {
                return (
                    <TaskView
                        definition={task.definition}
                        status={task.status}
                        dateAdded={task.dateAdded}
                        handleStatusChange={handleStatusChange} />)
            })}
            



        </div>
    )
}


export default List