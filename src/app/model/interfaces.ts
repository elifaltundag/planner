
/* 
TASK
id<str> : {
    definition: str
    status: "toDo" || "inProgress" || "done"
    
    ? You can't JSON.stringfiy(DATE)
    ? Do it manually ?!! when you add, start, finish 
    dateAdded: id 
    dateStarted: null || str (Date.now())
    dateFinished: null || str (Date.now())
}
*/
import React from "react";

 
 
export interface Task {
    definition: string;
    status: number ;
    dateAdded: string;
    dateStarted?: string;
    dateFinished?: string;
    /* 
    ! DEL isDone
    ! ADD
    * status: todo || inProgress || done
    * dateAdded: Date --> ID ? 
    * dateStarted: Date || null 
    * dateFinished: Date || null
    */
};






/* REACT COMPONENTS' PROPS */ 
export interface NewTaskProps{
    taskDef: string;
    setTaskDef: React.Dispatch<React.SetStateAction<string>>;
    inputRef: React.MutableRefObject<null>;
    handleChange: any;
    handleSubmit: any;
};



export interface ListProps {
    status: string;
    taskList: Array<any>;
    handleStatusChange: any;
};

export interface TaskViewProps extends Task {
    handleStatusChange: any;
}
