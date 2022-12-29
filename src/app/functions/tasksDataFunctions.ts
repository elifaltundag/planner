import { Task, Status, TasksMap, TasksData } from "../model/dataStructures";

export function addNewTaskToTasksData(currentTasksData: TasksData, newTask: Task): TasksData {
    // Copy current tasks data
    let tasksUpdated: TasksMap = {...currentTasksData.tasks}
    const toDoListOrderUpdated = [...currentTasksData.taskLists[0].taskIdsOrder, newTask.dateAdded];

    // Add new task to updated tasks 
    tasksUpdated[newTask.dateAdded] = newTask

    return {
        ...currentTasksData,
        tasks: tasksUpdated,
        taskLists: {
            ...currentTasksData.taskLists,
            0: {
                ...currentTasksData.taskLists[0],
                taskIdsOrder: toDoListOrderUpdated
            }
        }
    }
}

export function getTasksData(): TasksData {
    const data = localStorage.getItem("tasksData") 
    
    if (data) {
        return JSON.parse(data)
    } 
    
    return {
        tasks: { },
        taskListOrder: [Status.TODO, Status.INPROGRESS, Status.DONE],
        taskLists: {
            [Status.TODO]: {
                taskListStatus: Status.TODO,
                taskIdsOrder: []
            },
            
            [Status.INPROGRESS]: {
                taskListStatus: Status.INPROGRESS,
                taskIdsOrder: []
            },
            
            [Status.DONE]: {
                taskListStatus: Status.DONE,
                taskIdsOrder: []
            }
        }
    }
    

}