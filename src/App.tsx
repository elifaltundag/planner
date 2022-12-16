// React  
import React, { useState, useRef, useEffect } from 'react';

// Design - SCSS
import "./design/globals/app-boilerplate.scss";
import "./design/globals/layout.scss";

// Interfaces
/* import { Task } from './app/model/interfaces'; */

// Components
import Header from './app/components/Header';
import NewTask from './app/components/NewTask';
import List from './app/components/List';



const App: React.FC = () => {
  
  /* -------------- */ 
  /* -------------- */ 
  /* -------------- */ 
  /* Default states */
  const [taskDef, setTaskDef] = useState<string>(""); 
  const [taskList, setTaskList] = useState<{}>(
    /* 
    ! Hard-coded initial list task list --> REMOVE  
    * If there is already data stored in localStorage use it, else empty array
    JSON.parse(localStorage.getItem("taskList")!) || 
    */ 
   {
      "todo1": {
        definition: "data structures: interfaces, classes",
        status: "toDo",
        dateAdded: "0405"
      }, 
      "inProgress1": {
        definition: "TDD",
        status: "inProgress",
        dateAdded: "45542684",
        dateStarted: "1473541"
      },
      "done1": {
        definition: "deploy on netlify",
        status: "done",
        dateAdded: "2455968",
        dateStarted: "6541798",
        dateFinished: "14987987"
      },
      "todo2": {
        definition: "dark/light theme",
        status: "toDo",
        dateAdded: "0405"
      }
    })  
  
  const [tasksToDo, tasksInProgress, tasksDone] = getTasksSortedByStatus(taskList)    


  let inputRef = useRef(null)


  /* -------------- */ 
  /* -------------- */ 
  /* Task Functions */
  /* function filterOutTasks(taskList, taskStatus): Array<Task> {
    let filteredArr = []




    return filteredArr
  } */
  /* 
  Return and array of 3 arrays: 
  * 0 : tasksToDo       = []  
  * 1 : tasksInProgress = [] 
  * 2 : tasksDone       = [] 
  */
  
  function getTasksSortedByStatus(taskList: any): any {
    let tasksToDo: any = []
    let tasksInProgress: any = []
    let tasksDone: any = []

    for (let task in taskList) {
      let taskArr;
      const taskStatus = taskList[task].status

      switch (taskStatus) {
        case "inProgress":
          taskArr = tasksInProgress;
          break;
        
        case "done":
          taskArr = tasksDone;
          break;
      
        default: /* toDo and anything else */ 
          taskArr = tasksToDo;
          break;
      }

      taskArr.push(taskList[task])
    }

    return [tasksToDo, tasksInProgress, tasksDone]
  }
  
  /* -------------- */ 
  /* -------------- */ 
  /* Form Functions */ 
  function handleSubmit(e: React.FormEvent<SubmitEvent>) {
    // Prevent form from resetting on submission
    e.preventDefault();

    // Create a new task with the most recent task definition 
    setTaskList({})
    // Add the new task to task list and reset input area
    
    /* 
    ! UNCOMMENT AND FIX ERROR
    inputRef.current.focus()
    */ 
  }
  
  
  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    
  }
 


  // Update localstorage
  useEffect(() => {
    
    localStorage.setItem("taskList", JSON.stringify(taskList))

  }, [taskList])
  
  /* console.log(taskList) */
  /* console.log(filterOutTasks("to-do", taskList)) */

  



  return (
    <div className="App">
      <Header />
      
      <main className="main-layout">
        <NewTask
          inputRef = {inputRef} 
          taskDef={taskDef} 
          setTaskDef={setTaskDef} 
          handleChange={handleInputChange}
          handleSubmit={handleSubmit} />
        
        
        {<List 
          status="to-do"
          taskList={tasksToDo} 
        />}

        {<List 
          status="in-progress"
          taskList={tasksInProgress} 
        />}
      
        {<List 
          status="done"
          taskList={tasksDone} 
        />}
      </main>
    </div>
  );
}

export default App;
