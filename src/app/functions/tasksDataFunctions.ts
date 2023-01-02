import { Task, Status, TasksData } from "../model/dataStructures";


export function getTasksData(): TasksData {
    const data = localStorage.getItem("tasksData") 
    
    if (data) {
        return JSON.parse(data)
    } 
    
    return {
        Tasks: { },
        TaskListOrder: [Status.TODO, Status.INPROGRESS, Status.DONE],
        TaskLists: {
            [Status.TODO]: {
                TaskListStatus: Status.TODO,
                taskIdsOrder: []
            },
            
            [Status.INPROGRESS]: {
                TaskListStatus: Status.INPROGRESS,
                taskIdsOrder: []
            },
            
            [Status.DONE]: {
                TaskListStatus: Status.DONE,
                taskIdsOrder: []
            }
        }
    }
}


export function addNewTask(updateTasksData: React.Dispatch<React.SetStateAction<TasksData>>, newTask: Task)/* : TasksData */ {
    updateTasksData(prevTasksData => ({
        ...prevTasksData,

        Tasks: {
            ...prevTasksData.Tasks, 
            [newTask.id] : newTask
        },

        TaskLists: {
            ...prevTasksData.TaskLists,
            0 : {
                ...prevTasksData.TaskLists[0],
                taskIdsOrder: prevTasksData.TaskLists[0].taskIdsOrder.concat([newTask.id])
            }
        }
    }))
}


export function updateTaskDefinition(updateTasksData: React.Dispatch<React.SetStateAction<TasksData>>, taskId: string, newDefinition: string) {
    // Implement function in SingleTask.tsx
    updateTasksData(prevTasksData => ({
        ...prevTasksData,
        Tasks: {
            ...prevTasksData.Tasks,
            [taskId]: {
                ...prevTasksData.Tasks[taskId],
                definition: newDefinition
            }
        }
    }))
}