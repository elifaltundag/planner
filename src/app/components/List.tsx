import React from "react";
import { Task, ListProps } from "../model/interfaces";

import "../../design/components/list.scss"

function List({ name, taskList }: ListProps) {
    const styles:React.CSSProperties = {
        backgroundColor: `var(--clr-bg-${name})`,
        color: `var(--clr-txt-${name})`
    }

    console.log(taskList)

    return (
        <div className={`${name}-list`} style={styles}>
            <h2 className={`${name}-list__title`}>{`${name.toUpperCase()}`}</h2>

            {<ul>
                {taskList.map((task: Task) => {
                    return (
                        <li 
                            className={`${name}--item`}
                        >
                            {task.definition}
                        </li>)
                })}
            </ul>}



        </div>
    )
}


export default List