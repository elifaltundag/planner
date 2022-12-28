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
    const data = localStorage.getItem("tasksData") || "";

    return JSON.parse(data)
}