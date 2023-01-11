import React from "react";

import SingleTask from "./SingleTask";
import { Status } from "../model/enums";
import { ListProps } from "../model/componentsPropsModel";

import { Droppable } from "react-beautiful-dnd";

import "../../design/components/list.scss"

function List({status, tasksData, setTasksData}: ListProps) {
    /* const styles:React.CSSProperties = {
        backgroundColor: `var(--clr-bg-${status})`,
        color: `var(--clr-txt-${status})`
    } */

    function generateListTitle(listStatus: Status): string {
        let title = "";

        switch (listStatus) {
            case 0:
                title += "TO DO";
                break;
            case 1:
                title += "IN PROGRESS";
                break;
            case 2:
                title += "DONE";
                break;
            default:
                title += "";
                break;
        }

        return title
    }

    const TaskIdsOrder = tasksData.TaskLists[status].TaskIdsOrder
    

    return (
        <div 
            className = {`list-${status}`}
            /* style = {styles} */
        >
            <h2 className = {`list-${status}__title`}>
                {generateListTitle(status)}
            </h2>

            <Droppable droppableId = {status.toString()}>
                {(provided, snapshot) => (
                    <div
                        className = "droppable-list"
                        {...provided.droppableProps}
                        ref = {provided.innerRef}
                        data-isDraggingOver = {snapshot.isDraggingOver}
                    >
                        {TaskIdsOrder.map((taskId: string, index: number) => (<SingleTask 
                            key = {taskId}
                            task = {tasksData.Tasks[taskId]} 
                            index = {index}
                            tasksData = {tasksData}
                            setTasksData = {setTasksData}
                            />))
                            
                        }
                        {provided.placeholder}
                        

                    </div>
                )}
            </Droppable>
        </div>
    )    
}


export default List