import { Status, Task, TaskList } from "./dataStructures";

/* REACT COMPONENTS' PROPS */ 
export interface NewTaskProps {
    inputRef: React.RefObject<HTMLInputElement>;
    taskList: TaskList;
    setTaskList: React.Dispatch<React.SetStateAction<TaskList>>;
};


export interface ListProps {
    status: Status;
    taskList: TaskList;
    tasks: Array<Task>;
    setTaskList: React.Dispatch<React.SetStateAction<TaskList>>;
    handleDelete: any;
    handleEdit: any;
    handleTurnEditOn: any;
}

export interface TaskViewProps {
    task: Task;
    taskList: TaskList;
    setTaskList: React.Dispatch<React.SetStateAction<TaskList>>;
    handleDelete: any;
    handleEdit: any;
    handleTurnEditOn: any;
}