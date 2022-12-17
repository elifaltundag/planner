
import React from "react";

export interface Task {
    definition: string;
    status: number ;
    dateAdded: string;
    dateStarted?: string;
    dateFinished?: string;
};




/* REACT COMPONENTS' PROPS */ 
export interface NewTaskProps{
    taskDef: string;
    setTaskDef: React.Dispatch<React.SetStateAction<string>>;
    inputRef: React.MutableRefObject<null>;
    handleChange: any;
    handleNewTaskSubmit: any;
};



export interface ListProps {
    status: string;
    taskList: Array<any>;
    handleStatusChange: any;
    handleDelete: any;
};

export interface TaskViewProps extends Task {
    handleStatusChange: any;
    handleDelete: any;
}
