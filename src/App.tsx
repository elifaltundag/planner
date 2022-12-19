// React  
import React, { useState, useRef, useEffect } from 'react';

// Design - SCSS
import "./design/globals/app-boilerplate.scss";
import "./design/globals/layout.scss";

// Types, interfaces, classes and enums
import { Status, TaskList } from './app/model/dataStructures';


// Components
import Header from './app/components/Header';
import NewTask from './app/components/NewTask';
import List from './app/components/List';

// Functions
import { getTaskList, getSortedTasks } from './app/functions/taskListFuncs';


const App: React.FC = () => {
  
  /* -------------- */ 
  /* -------------- */ 
  /* -------------- */ 
  /* Default states */
  // If there is already data stored in localStorage use it, else empty object
  
  const [taskList, setTaskList] = useState<TaskList>(getTaskList())  

  let inputRef = useRef<HTMLInputElement>(null)

  
  /* FUNCTIONS */
  function handleDelete(id: number) {
    // Copy task list
    let newTaskList = {...taskList}
    
    // Delete the unwanted task
    delete newTaskList[id]

    // Update task list
    setTaskList(newTaskList)
  }

  function handleTaskDefinitionEdit(e: any, id: number, ref: React.RefObject<HTMLInputElement>) {
    // Prevent the form to reset the page on submission 
    /* e.preventDefault(); */

    // Copy task list
    let newTaskList = {...taskList}
    
    // Change tasks definition in new list (if there is in an input element)
    if (ref.current) {
      newTaskList[id].definition = ref.current.value
    }
    
    // Turn edit mode off
    newTaskList[id].isEditOn = false

    // Update task list
    setTaskList(newTaskList)
  }

  function handleTurnEditOn(id: number) {
    // Copy task list
    let newTaskList = {...taskList}
    
    // Turn edit mode on for that task 
    newTaskList[id].isEditOn = true
    
    // Update task list 
    setTaskList(newTaskList)
  }

  function handleStatusChange(e: any, id: number): void {
    let newTaskList = {...taskList}
    newTaskList[id] = {
      ...newTaskList[id], 
      status: parseInt(e.currentTarget.value)
    }

    setTaskList(newTaskList)
  }

  // Update localstorage
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  const tasksSorted = getSortedTasks(taskList)


  return (
    <div className="App">
      <Header />
      
      <main className="main-layout">
        <NewTask
          inputRef={inputRef}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        
        
        <List 
          status={Status.TODO}
          tasks={tasksSorted[Status.TODO]}
          taskList={taskList}
          setTaskList={setTaskList}
          handleDelete={handleDelete}
          handleTaskDefinitionEdit={handleTaskDefinitionEdit}  
          handleTurnEditOn={handleTurnEditOn}
          handleStatusChange={handleStatusChange}
        />

        <List 
          status={Status.INPROGRESS}
          tasks={tasksSorted[Status.INPROGRESS]}
          taskList={taskList}
          setTaskList={setTaskList}
          handleDelete={handleDelete}
          handleTaskDefinitionEdit={handleTaskDefinitionEdit}
          handleTurnEditOn={handleTurnEditOn}
          handleStatusChange={handleStatusChange}
        />
      
        <List 
          status={Status.DONE}
          tasks={tasksSorted[Status.DONE]}
          taskList={taskList}
          setTaskList={setTaskList}
          handleDelete={handleDelete}
          handleTaskDefinitionEdit={handleTaskDefinitionEdit}
          handleTurnEditOn={handleTurnEditOn}
          handleStatusChange={handleStatusChange}
        />
      </main>
    </div>
  );
}

export default App;
