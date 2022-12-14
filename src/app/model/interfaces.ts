 
export interface Task {
    id: number;
    definition: string;
    isDone: boolean;
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
    handleChange: any;
    handleSubmit: any;
    inputRef: React.MutableRefObject<null>;
};



export interface ListProps {
    name: string;
    taskList: Array<Task>;
    handleToggle: Function;
};


