import { TasksData } from "../model/tasksData";
import { Status, ColorTheme } from "../model/enums";


export function getTasksData(): TasksData {
    const savedTasksData = localStorage.getItem("tasksData") 
    
    if (savedTasksData) {
        return JSON.parse(savedTasksData)
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


export function getPreferredColorTheme(): ColorTheme {
    const preferredColorTheme = localStorage.getItem("preferredColorTheme")

    if (preferredColorTheme) {
        return JSON.parse(preferredColorTheme)
    }

    return ColorTheme.DARK
}