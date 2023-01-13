import { Status } from "./enums";

export class Task {
    constructor(
        public definition: string,
        public status: Status,
        public id: string
    ){}
}

export interface TasksMap {
    // Use Task.id as taskId
    [taskId: string]: Task
}

export interface TaskList {
    TaskListStatus: Status;
    TaskIdsOrder: Array<string>;
}

export interface TasksData {
    Tasks: TasksMap;
    TaskListOrder: Array<Status>;
    TaskLists: { [TaskListId: number]: TaskList }
}

export const emptyTasksData: TasksData = {
    Tasks: { },
        TaskListOrder: [Status.TODO, Status.INPROGRESS, Status.DONE],
        TaskLists: {
            [Status.TODO]: {
                TaskListStatus: Status.TODO,
                TaskIdsOrder: []
            },
            
            [Status.INPROGRESS]: {
                TaskListStatus: Status.INPROGRESS,
                TaskIdsOrder: []
            },
            
            [Status.DONE]: {
                TaskListStatus: Status.DONE,
                TaskIdsOrder: []
            }
        }
} 
