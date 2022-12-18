/* import React from "react"; */

export const enum Status {
    TODO,
    INPROGRESS,
    DONE
}

export class Task {
    constructor(
        public definition: string,
        public status: Status,
        public isEditOn: boolean,
        public dateAdded: number,
        public dateStarted?: number,
        public dateFinished?: number
    ){}
}

export interface TaskList {
    // Use Task.dateAdded as id
    [id: number]: Task
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
