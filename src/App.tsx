// React  
import React, { useState, useRef, useEffect } from 'react';

// Design - SCSS
import "./design/globals/app-boilerplate.scss";
import "./design/globals/layout.scss";

// Interfaces
import { Task } from './app/model/interfaces';

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
  const [taskList, setTaskList] = useState<{[id: number]: Task}>(
    /* 
    ! Hard-coded initial list task list --> REMOVE  
    * If there is already data stored in localStorage use it, else empty array
    */ 
    /* JSON.parse(localStorage.getItem("taskList")!) ||  */
   {
      26598934: {
        definition: "data structures: interfaces, classes",
        status: 0,
        dateAdded: 26598934
      }, 
      45542684: {
        definition: "TDD",
        status: 1,
        dateAdded: 45542684,
        dateStarted: 1473541
      },
      2455968: {
        definition: "deploy on netlify",
        status: 2,
        dateAdded: 2455968,
        dateStarted: 6541798,
        dateFinished: 14987987
      },
      8405: {
        definition: "dark/light theme",
        status: 0,
        dateAdded: 8405
      }
    })  
  
  const [tasksSorted, setTasksSorted] = useState(getTasksSortedByStatus(taskList) || [[], [], []])
    


  let inputRef = useRef(null)


  /* -------------- */ 
  /* -------------- */ 
  /* Task Functions */
  /* 
  Return and array of 3 arrays: 
  * 0 : tasksToDo       = []  
  * 1 : tasksInProgress = [] 
  * 2 : tasksDone       = [] 
  */
  function getTasksSortedByStatus(taskList: any): Array<Array<Task>> {
    let tasksToDo: Array<Task> = []
    let tasksInProgress: Array<Task> = []
    let tasksDone: Array<Task> = []

    for (let task in taskList) {
      let taskArr;
      const taskStatus = taskList[task].status

      switch (taskStatus) {
        case 1:
          taskArr = tasksInProgress;
          break;
        
        case 2:
          taskArr = tasksDone;
          break;
      
        default: /* 0 and anything else */ 
          taskArr = tasksToDo;
          break;
      }

      taskArr.push(taskList[task])
    }

    return [tasksToDo, tasksInProgress, tasksDone]
  }

  /* function handleStatusChange(id: number) {
    setTaskList((prevTaskList) => prevTaskList)
  } */
  
  /* -------------- */ 
  /* -------------- */ 
  /* Form Functions */ 
  function handleSubmit(e: React.FormEvent<SubmitEvent>) {
    // Prevent form from resetting on submission
    e.preventDefault();

    // Create a new task with the most recent task definition 
    const newTask: Task = {
      definition: taskDef,
      dateAdded: Date.now(),
      status: 0
    }

   


    // Add the new task to task list, re-sort taskList and reset input area
    // Create new task list: prev task list + id (dateAdded) : newTask
    // setTaskList(new task list)
    // setTasksSorted(new task list)
    // setTaskDef("") 

    let newTaskList: any = {...taskList}
    newTaskList[newTask.dateAdded] = newTask
    setTaskList(newTaskList)
    setTasksSorted(getTasksSortedByStatus(newTaskList))
    setTaskDef("") 

    /* 
    ! UNCOMMENT AND FIX ERROR
    inputRef.current.focus()
    */ 
  }
  
  
  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    setTaskDef(e.currentTarget.value)
  }
 


  // Update localstorage
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])
  

  console.log(taskList)
  

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
          taskList={tasksSorted[0]} 
        />}

        {<List 
          status="in-progress"
          taskList={tasksSorted[1]} 
        />}
      
        {<List 
          status="done"
          taskList={tasksSorted[2]} 
        />}
      </main>
    </div>
  );
}

export default App;
