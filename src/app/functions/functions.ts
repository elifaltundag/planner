/* ------------------ */ 
  /* ------------------ */ 
  /* TaskList Functions */
  /* 
  Return and array of 3 arrays: 
  * 0 : tasksToDo       = []  
  * 1 : tasksInProgress = [] 
  * 2 : tasksDone       = [] 
  */
  /* function getTasksSortedByStatus(taskList: any): Array<Array<Task>> {
    let tasksToDo: Array<Task> = []
    let tasksInProgress: Array<Task> = []
    let tasksDone: Array<Task> = []
    let tasksUnassigned: Array<Task> = []

    for (let task in taskList) {
      let taskArr;
      const taskStatus = taskList[task].status

      switch (taskStatus) {
        case (0): 
          taskArr = tasksToDo;
          break;

        case (1):
          taskArr = tasksInProgress;
          break;
        
        case (2):
          taskArr = tasksDone;
          break;
      
        default:
          taskArr = tasksUnassigned;
          break;
      }

      taskArr.push(taskList[task])
    }
    
    if (tasksUnassigned.length > 0) {
      throw new Error("Can't assign some tasks!!")
    }

    return [tasksToDo, tasksInProgress, tasksDone]
  } */


  /* ----------------- */ 
  /* ----------------- */ 
  /* NewTask Functions */
  /* 
  function handleNewTaskInputChange(e: React.FormEvent<HTMLInputElement>) {
    setTaskDef(e.currentTarget.value)
  }

  function handleNewTaskSubmit(e: React.FormEvent<SubmitEvent>) {
    // Prevent form from resetting on submission
    e.preventDefault();

    // Create a new task with the most recent task definition 
    const newTask: Task = {
      definition: taskDef,
      dateAdded: Date.now().toString(),
      status: 0
    }
    let newTaskList: {[id: string]: Task}  = {...taskList}
    newTaskList[newTask.dateAdded] = newTask

   
    // Set the new task list as taskList, re-sort taskList and reset input area
    setTaskList(newTaskList)
    setTaskDef("") 

    ! UNCOMMENT AND FIX ERROR
    inputRef.current.focus()
}
*/ 

  /* -------------- */ 
  /* -------------- */ 
  /* Task Functions */
  /* function handleDelete(id: string) {
    let newTaskList = {...taskList}
    delete newTaskList[id]

    setTaskList(newTaskList)
  } */
  
  
  /* ! HAVENT TESTED YET  */
/*   function handleTaskDefinitionChange(e: any, id: string) {    
    let newTaskList = {...taskList}
    newTaskList[id] = {
      ...newTaskList[id],
      definition: e.target.value
    }

    setTaskList(newTaskList)
  } */

/*   function handleStatusChange(e: any, id: string): void {
    let newTaskList = {...taskList}
    newTaskList[id] = {
      ...newTaskList[id], 
      status: parseInt(e.currentTarget.value)
    }

    setTaskList(newTaskList)
  } */
export {}
  