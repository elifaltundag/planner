/* import React from "react"; */

export const enum Status {
    TODO,
    INPROGRESS,
    DONE
}

/* export const enum TaskEvent {
    DELETE,
    EDIT_DEFINITION,
    EDIT_STATUS
} */

export class Task {
    constructor(
        public definition: string,
        public status: Status,
        public dateAdded: string/* ,
        public dateStarted?: number,
        public dateFinished?: number */
    ){}
}

export interface TasksMap {
    // Use Task.dateAdded as taskId
    [taskId: string]: Task
}

export interface TaskList {
    taskListStatus: Status;
    taskIdsOrder: Array<string>;
}


export interface TasksData {
    tasks: TasksMap;
    taskListOrder: Array<Status>;
    taskLists: { [taskListId: number]: TaskList }
}
