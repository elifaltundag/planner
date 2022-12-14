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

  /* 
  ! Hard-coded initial list task list --> REMOVE  
  * If there is already data stored in localStorage use it, else empty array
  */
 
  const [taskList, setTaskList] = useState<Array<Task>>([{
      id: 693,
      definition: "finish prev ts-react project (algorithm visualizer)",
      isDone: false
    }, {
      id: 502,
      definition: "stutter freely",
      isDone: false
    }, {
      id: 176,
      definition: "start new ts-react project :/",
      isDone: true
    }, {
      id: 943,
      definition: "play with and pet Köri",
      isDone: true
    }])
  useEffect(() => {
    if (localStorage.getItem("taskList")) {
      setTaskList(JSON.parse(localStorage.getItem("taskList")));
      console.log("it should be getting it\n" + localStorage.getItem("taskList"))
    }
  }, [])
  


  let inputRef = useRef(null)


  /* -------------- */ 
  /* -------------- */ 
  /* Task Functions */
  function handleToggle(id: number) {
    setTaskList(prevTaskList => {
      return prevTaskList.map((task: Task) => {
        return task.id === id ? {...task, isDone: !task.isDone} : {...task}
      })
    })
  }

  /* -------------- */ 
  /* -------------- */ 
  /* Form Functions */ 
  function handleSubmit(e: React.FormEvent<SubmitEvent>) {
    // Prevent form from resetting when submitted
    e.preventDefault();

    // Create a new task with the most recent task definition which updates on every change
    const newTask: Task = {
      id: 99,
      definition: taskDef,
      isDone: false
    }

    // Add the new task to task list and reset input area
    setTaskList(prevTaskList => ([...prevTaskList, newTask]))
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
        
        
        <List 
          name="to-do" 
          taskList={taskList.filter(task => !task.isDone)}
          handleToggle={handleToggle} />
      
        <List 
          name="done" 
          taskList={taskList.filter(task => task.isDone)}
          handleToggle={handleToggle} />
      </main>
    </div>
  );
}

export default App;
