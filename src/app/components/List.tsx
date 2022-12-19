import React from "react";

import TaskView from "./TaskView";
import { Task, Status } from "../model/dataStructures";
import { ListProps } from "../model/componentPropsInterfaces";

import "../../design/components/list.scss"

function List({status, taskList, tasks, setTaskList, handleDelete, handleTaskDefinitionEdit, handleTurnEditOn, handleStatusChange}: ListProps) {
    const styles:React.CSSProperties = {
        backgroundColor: `var(--clr-bg-${status})`,
        color: `var(--clr-txt-${status})`
    }


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
        }

        return title
    }

    

    return (
        <div 
            className={`list-${status}`}
            style={styles}
        >
            <h2 className={`list-${status}__title`}>
                {generateListTitle(status)}
            </h2>

 
            {tasks.map((task: Task) => {
                return (
                    <TaskView 
                        task={task}
                        taskList={taskList}
                        setTaskList={setTaskList}
                        handleDelete={handleDelete}
                        handleTaskDefinitionEdit={handleTaskDefinitionEdit} 
                        handleTurnEditOn={handleTurnEditOn}
                        handleStatusChange={handleStatusChange}
                    />)
            })}    
        </div>
        )
   
        
}


export default List