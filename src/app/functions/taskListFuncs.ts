import { /* Status,  */Task, TaskList } from "../model/dataStructures";

export function addNewTaskToTaskList(curTaskList: TaskList, newTask: Task): TaskList {
    // Copy current task list
    let newTaskList: TaskList = {...curTaskList}

    // Add { id: newTask }, use dateAdded as id
    newTaskList[newTask.dateAdded] = newTask

    return newTaskList
}

export function getSortedTasks(taskList: TaskList): Array<Array<Task>>{
    let sortedTasks: Array<Array<Task>> = [[], [], []]

    for (const taskID in taskList) {
        const task = taskList[taskID]
        sortedTasks[task.status].push(task)
    }

    return sortedTasks
} 