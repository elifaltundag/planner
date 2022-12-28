// React  
import React, { useState, useRef, useEffect } from 'react';

// Beautiful drag and drop
import { DragDropContext, DropResult} from "react-beautiful-dnd";

// Design - SCSS
import "./design/globals/app-boilerplate.scss";
import "./design/globals/layout.scss";

// Types, interfaces, classes and enums
import { TasksData } from './app/model/dataStructures';


// Components
import Header from './app/components/Header';
import NewTask from './app/components/NewTask';
import List from './app/components/List';

// Functions
import { getTasksData } from './app/functions/tasksDataFunctions';



const App: React.FC = () => {
  
  /* ------------------------------------------------------------------- */ 
  /* -------------- */ 
  /* -------------- */ 
  /* Default states */
  // If there is already data stored in localStorage use it, else empty object
  const [tasksData, setTasksData] = useState<TasksData>(getTasksData())

  let inputRef = useRef<HTMLInputElement>(null)

  
  /* FUNCTIONS */
  /* function handleDelete(id: number) {
    // Copy task list
    let newTaskList = {...taskList}
    
    // Delete the unwanted task
    delete newTaskList[id]

    // Update task list
    setTaskList(newTaskList)
  } */

 /*  function handleTaskDefinitionEdit(id: number, taskRef: React.RefObject<HTMLInputElement>) {
    // Prevent the form to reset the page on submission 
    // e.preventDefault(); 

    // Copy task list
    let newTaskList = {...taskList}
    
    // Change tasks definition in new list (if there is in an input element)
    if (taskRef.current) {
      newTaskList[id].definition = taskRef.current.value.trim()
    }
    
    // Turn edit mode off
    newTaskList[id].isEditOn = false

    // Update task list
    setTaskList(newTaskList)
  } */

  /* function handleTurnEditOn(id: number, taskRef: React.RefObject<HTMLInputElement>) {
    // Copy task list
    let newTaskList = {...taskList}
    
    // Turn edit mode on for that task 
    newTaskList[id].isEditOn = true
    
    // Update task list 
    setTaskList(newTaskList)

    // Focus on input 
    setTimeout(() => {
      taskRef.current?.focus()
    }, 100) 
  } */

  /* function handleStatusChange(e: any, id: number): void {
    let newTaskList = {...taskList}
    newTaskList[id] = {
      ...newTaskList[id], 
      status: parseInt(e.currentTarget.value)
    }

    setTaskList(newTaskList)
  } */


  // DRAG & DROP
    function handleDragEnd(result: DropResult): void {
    /* 
    * IN-PROGRESS  
    */ 

    const { source, destination, draggableId } = result;

    if (!destination) { return }

    // If the task is put to its original spot 
    if (source.droppableId === destination.droppableId && source.index === destination.index) { return }

    // If the task is moved in the same list (only horizontally)
    if (source.droppableId === destination.droppableId && source.index !== destination.index) { 
        const STATUS = Number(source.droppableId)
        const newList = { ...tasksData.taskLists[STATUS] }
        
        const newListTaskIdsOrder = [ ...newList.taskIdsOrder ]

        // 1. Remove the task from its source index
        newListTaskIdsOrder.splice(source.index, 1)

        // 2. Put it in its destination index
        newListTaskIdsOrder.splice(destination.index, 0, draggableId)

        // Change the order in the new list
        newList.taskIdsOrder = newListTaskIdsOrder
        

        setTasksData(prevTasksData => ({
            ...prevTasksData,
            taskLists: {
                ...prevTasksData.taskLists,
                [STATUS]: newList
            }
        }))
    }

    // If the item is moved to another list: change its status
    if (source.droppableId !== destination.droppableId) {
        /* 
        // Remove if from the source list 
        const STATUS_SRC = Number(source.droppableId)
        const newSourceList = { ...tasksData.taskLists[STATUS_SRC] }

        const newSourceListTaskIdsOrder = [ ...newSourceList.taskIdsOrder ]
        newSourceListTaskIdsOrder.splice(source.index, 1)
        newSourceList.taskIdsOrder = newSourceListTaskIdsOrder
        
        
        
        
        // Put it in the destination list
        const STATUS_DST = Number(destination.droppableId)
        const newDestinationList = { ...tasksData.taskLists[STATUS_DST] }

        const newDestinationListTaskIdsOrder = [ ...newDestinationList.taskIdsOrder ]
        newDestinationListTaskIdsOrder.splice(destination.index, 0, draggableId)
        newDestinationList.taskIdsOrder = newDestinationListTaskIdsOrder

        
        // Lists will be different this time
        setTasksData(prevTasksData => ({
            ...prevTasksData,
        }))
         */
        
    }

  }

  // Delete previous taskList at start  
  /* useEffect(() => {
    localStorage.removeItem("taskList")
  }, []) */


  // Update localstorage
    useEffect(() => {
        localStorage.setItem("tasksData", JSON.stringify(tasksData))
    }, [tasksData])

    console.log(tasksData)

    return (
        <div className = "App">
            <Header />
        
            <main className = "main-layout">
            
                <NewTask
                    inputRef = {inputRef}
                    tasksData = {tasksData}
                    setTasksData = {setTasksData}
                />
                
                <DragDropContext onDragEnd = {handleDragEnd}>
                    {
                        tasksData.taskListOrder.map((taskListId: number) => (<List 
                            status = {tasksData.taskLists[taskListId].taskListStatus} 
                            tasksData = {tasksData}
                            setTasksData = {setTasksData}
                        />)
                        )
                    }
                </DragDropContext>
            </main>
        </div>
    );
}

export default App;
