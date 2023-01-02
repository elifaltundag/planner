import { Status, Task, TaskList, TasksData } from "./dataStructures";

/* REACT COMPONENTS' PROPS */ 
export interface NewTaskProps {
    inputRef: React.RefObject<HTMLInputElement>;
    tasksData: TasksData;
    setTasksData: React.Dispatch<React.SetStateAction<TasksData>>;
};


export interface ListProps {
    status: Status;
    tasksData: TasksData;
    setTasksData: React.Dispatch<React.SetStateAction<TasksData>>;
    
    TaskList?: TaskList;
    tasks?: Array<Task>;
    setTaskList?: React.Dispatch<React.SetStateAction<TaskList>>;
    handleDelete?: any;
    handleTaskDefinitionEdit?: any;
    handleTurnEditOn?: any;
    handleStatusChange?: any;
}

export interface SingleTaskProps {
    task: Task;
    index: number;
    tasksData: TasksData;
    setTasksData: React.Dispatch<React.SetStateAction<TasksData>>;
}