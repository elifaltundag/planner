import { Task, Status, TasksMap, TasksData } from "../model/dataStructures";

export function addNewTaskToTasksData(currentTasksData: TasksData, newTask: Task): TasksData {
    // Copy current tasks data
    let tasksUpdated: TasksMap = {...currentTasksData.tasks}
    const toDoListOrderUpdated = [...currentTasksData.TaskLists[0].taskIdsOrder, newTask.id];

    // Add new task to updated tasks 
    tasksUpdated[newTask.id] = newTask

    return {
        ...currentTasksData,
        tasks: tasksUpdated,
        TaskLists: {
            ...currentTasksData.TaskLists,
            0: {
                ...currentTasksData.TaskLists[0],
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

export function updateTaskDefinition(currentTasksData: TasksData, updateTasksData: React.Dispatch<React.SetStateAction<TasksData>>, taskId: string, newDefinition: string) {
    // Implement function in SingleTask.tsx
}