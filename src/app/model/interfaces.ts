
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
    status: "toDo" | "inProgress" | "done";
    dateAdded: number | string;
    dateStarted?: number;
    dateFinished?: number;
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
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<SubmitEvent>) => void;
};



export interface ListProps {
    name: string;
    taskList: Array<any>
};

