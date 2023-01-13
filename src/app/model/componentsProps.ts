import { Task, TaskList, TasksData } from "./tasksData";
import { Status } from "./enums";

/* REACT COMPONENTS' PROPS */ 
export interface NewTaskProps {
    newTaskInputRef: React.RefObject<HTMLInputElement>;
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

export interface DeletePopUpProps {
    tasksData?: TasksData;
    setTasksData: React.Dispatch<React.SetStateAction<TasksData>>;
    taskId?: string;
    listStatus?: Status;
    setDeleteIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
    
    /* 
    ! CURRENTLY USELESS
    */ 
    innerRef: React.RefObject<HTMLButtonElement>;

}

export interface ColorThemeContextProviderProps {
    children: React.ReactNode
}