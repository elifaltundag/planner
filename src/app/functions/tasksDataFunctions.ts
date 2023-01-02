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
                TaskIdsOrder: []
            },
            
            [Status.INPROGRESS]: {
                TaskListStatus: Status.INPROGRESS,
                TaskIdsOrder: []
            },
            
            [Status.DONE]: {
                TaskListStatus: Status.DONE,
                TaskIdsOrder: []
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
                TaskIdsOrder: prevTasksData.TaskLists[0].TaskIdsOrder.concat([newTask.id])
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