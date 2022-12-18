import { Status, Task, TaskList } from "../model/dataStructures";

export function addNewTaskToTaskList(curTaskList: TaskList, newTask: Task): TaskList {
    // Copy current task list
    let newTaskList: TaskList = {...curTaskList}

    // Add { id: newTask }, use dateAdded as id
    newTaskList[newTask.dateAdded] = newTask

    return newTaskList
}

export function getSortedTasks(taskList: TaskList): Array<Array<Task>>{
    let sortedTasks: Array<Array<Task>> = [[], [], []]

    for (const task in taskList) {
        const taskObj = taskList[task]
        sortedTasks[taskObj.status].push(taskObj)
    }

    return sortedTasks
} 