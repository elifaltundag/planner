import React from "react";

export const enum Status {
    TODO,
    INPROGRESS,
    DONE
}

export class Task {
    constructor(
        public definition: string,
        public status: Status,
        public dateAdded: number,
        public dateStarted?: number,
        public dateFinished?: number
    ){}
}

export interface TaskList {
    // Use Task.dateAdded as id
    [id: number]: Task
}


/* REACT COMPONENTS' PROPS */ 
export interface NewTaskProps {
    inputRef: React.MutableRefObject<null>;
    taskList: TaskList;
    setTaskList: React.Dispatch<React.SetStateAction<TaskList>>;
};


export interface ListProps {
    tasks: Array<Task>
    setTaskList: React.Dispatch<React.SetStateAction<TaskList>>;
}























/* 
export interface ListProps {
     
    status: string;
    taskList: Array<any>;
    handleStatusChange: any;
    handleDelete: any;
    handleTaskDefinitionChange: any

    ! Remove event handlers
    ! Add state setters
};
*/

export interface TaskViewProps extends Task {
    handleStatusChange: any;
    handleDelete: any;
    handleTaskDefinitionChange: any
}
