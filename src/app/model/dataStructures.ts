export const enum Status {
    TODO,
    INPROGRESS,
    DONE
}

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
    taskIdsOrder: Array<string>;
}


export interface TasksData {
    tasks: TasksMap;
    TaskListOrder: Array<Status>;
    TaskLists: { [TaskListId: number]: TaskList }
}
