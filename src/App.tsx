// React  
import React, { useState, useRef, useEffect } from 'react';

// Design - SCSS
import "./design/globals/app-boilerplate.scss";
import "./design/globals/layout.scss";

// Types, interfaces, classes and enums
import { Status, Task, TaskList } from './app/model/dataStructures';


// Components
import Header from './app/components/Header';
import NewTask from './app/components/NewTask';
import List from './app/components/List';

// Functions
import { getSortedTasks } from './app/functions/taskListFuncs';


const App: React.FC = () => {
  
  /* -------------- */ 
  /* -------------- */ 
  /* -------------- */ 
  /* Default states */
  // If there is already data stored in localStorage use it, else empty object
  
  const [taskList, setTaskList] = useState<TaskList>(
    JSON.parse(localStorage.getItem("taskList")!) || {})  

  let inputRef = useRef(null)



  // Update localstorage
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  const tasksSorted = getSortedTasks(taskList)
  console.log(tasksSorted)


  return (
    <div className="App">
      <Header />
      
      <main className="main-layout">
        <NewTask
          inputRef={inputRef}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        
        
        {/* <List 
          status="to-do"
          taskList={tasksSorted[0]}
          handleStatusChange={handleStatusChange}
          handleDelete={handleDelete} 
          handleTaskDefinitionChange={handleTaskDefinitionChange}
        />

        <List 
          status="in-progress"
          taskList={tasksSorted[1]}
          handleStatusChange={handleStatusChange}
          handleDelete={handleDelete} 
          handleTaskDefinitionChange={handleTaskDefinitionChange}
        />
      
        <List 
          status="done"
          taskList={tasksSorted[2]}
          handleStatusChange={handleStatusChange}
          handleDelete={handleDelete} 
          handleTaskDefinitionChange={handleTaskDefinitionChange}
        /> */}
      </main>
    </div>
  );
}

export default App;
