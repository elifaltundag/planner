import React from "react";
import { Task, ListProps } from "../model/interfaces";

import "../../design/components/list.scss"

function List({ status, taskList }: ListProps) {
    const styles:React.CSSProperties = {
        backgroundColor: `var(--clr-bg-${status})`,
        color: `var(--clr-txt-${status})`
    }

    console.log(taskList)

    return (
        <div className={`${status}-list`} style={styles}>
            <h2 className={`${status}-list__title`}>{`${status.toUpperCase()}`}</h2>

            {<ul>
                {taskList.map((task: Task) => {
                    return (
                        <li 
                            className={`${status}--item`}
                        >
                            {task.definition}
                        </li>)
                })}
            </ul>}



        </div>
    )
}


export default List