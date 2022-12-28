import { Task, TasksMap, TasksData } from "../model/dataStructures";

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
        taskListOrder: [0, 1, 2],
        taskLists: {
            0: {
                taskListStatus: 0,
                taskIdsOrder: []
            },
            
                1: {
                taskListStatus: 1,
                taskIdsOrder: []
            },
            
            2: {
                taskListStatus: 2,
                taskIdsOrder: []
            }
        }
    }
    

}