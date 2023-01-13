import { TasksData, emptyTasksData } from "../model/tasksData";
import { ColorTheme } from "../model/enums";


export function getTasksData(): TasksData {
    const savedTasksData = localStorage.getItem("tasksData") 
    
    if (savedTasksData) {
        return JSON.parse(savedTasksData)
    } 
    
    return {...emptyTasksData}
}


export function getPreferredColorTheme(): ColorTheme {
    const preferredColorTheme = localStorage.getItem("preferredColorTheme")

    if (preferredColorTheme) {
        return JSON.parse(preferredColorTheme)
    }

    return ColorTheme.DARK
}