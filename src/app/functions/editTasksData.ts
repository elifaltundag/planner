import { Task, TasksData, emptyTasksData } from "../model/tasksData";
import { Status } from "../model/enums";

export function addNewTask(updateTasksData: React.Dispatch<React.SetStateAction<TasksData>>, newTask: Task) {
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
                TaskIdsOrder: prevTasksData.TaskLists[0].TaskIdsOrder.concat([newTask.id])
            }
        }
    }))
}


export function updateTaskDefinition(updateTasksData: React.Dispatch<React.SetStateAction<TasksData>>, taskId: string, newDefinition: string) {
    updateTasksData(prevTasksData => ({
        ...prevTasksData,
        Tasks: {
            ...prevTasksData.Tasks,
            [taskId]: {
                ...prevTasksData.Tasks[taskId],
                definition: newDefinition.trim()
            }
        }
    }))
}


export function deleteTask(currentTasksData: TasksData, updateTasksData: React.Dispatch<React.SetStateAction<TasksData>>, taskId: string) {
    let updatedTasksData = {...currentTasksData}

    // Get task's index in its current list
    const taskStatus = currentTasksData.Tasks[taskId].status;
    const taskIndex = currentTasksData.TaskLists[taskStatus].TaskIdsOrder.indexOf(taskId) 


    // Delete task from Tasks (map)
    delete updatedTasksData.Tasks[taskId]

    // Delete taskId from TaskLists.order
    updatedTasksData.TaskLists[taskStatus].TaskIdsOrder.splice(taskIndex, 1)

    updateTasksData(updatedTasksData)
}


export function deleteTasksInList(currentTasksData: TasksData, updateTasksData: React.Dispatch<React.SetStateAction<TasksData>>, listStatus: Status) {
    const taskIdsToDelete = currentTasksData.TaskLists[listStatus].TaskIdsOrder;

    let updatedTasksData = {...currentTasksData}

    taskIdsToDelete.forEach(taskId => delete updatedTasksData.Tasks[taskId])
    updatedTasksData.TaskLists[listStatus].TaskIdsOrder = []
    
    updateTasksData(updatedTasksData)
}

export function resetTasksData(updateTasksData: React.Dispatch<React.SetStateAction<TasksData>>) {
    updateTasksData({...emptyTasksData}) 
}