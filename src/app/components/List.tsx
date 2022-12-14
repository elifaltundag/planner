import React, { useState, useContext } from "react";

import SingleTask from "./SingleTask";
import { Status } from "../model/enums";
import { ListProps } from "../model/componentsProps";

import { Droppable } from "react-beautiful-dnd";
import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";
import "../../design/components/list.scss";

import { MdDeleteSweep } from "react-icons/md";

import DeletePopUp from "./DeletePopUp";

function List({status, tasksData, setTasksData}: ListProps) {
    const [deleteIsClicked, setDeleteIsClicked] = useState<boolean>(false)
    const { colorTheme } = useContext(ColorThemeContext)  
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
            data-colorTheme = {colorTheme}
        >
            <h2 className = {`list-${status}__title`}>
                {generateListTitle(status)}
            </h2>
            
            <button className = "btn--delete-all"
                onClick = {() => setDeleteIsClicked(true)}
            >
                <MdDeleteSweep />
            </button>

            <Droppable droppableId = {status.toString()}>
                {(provided, snapshot) => (
                    <div className = "droppable-list"
                        data-colorTheme = {colorTheme}
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

            {deleteIsClicked && <DeletePopUp 
                tasksData = {tasksData}
                setTasksData = {setTasksData}
                listStatus = {status}
                setDeleteIsClicked = {setDeleteIsClicked}
            />}
        </div>
    )    
}


export default List