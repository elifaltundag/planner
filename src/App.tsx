// React  
import React, { useState, useRef, useEffect, useContext } from 'react';

// Beautiful drag and drop
import { DragDropContext, DropResult} from "react-beautiful-dnd";

// Design - SCSS
import "./design/globals/app-boilerplate.scss";
import "./design/globals/lists-layout.scss";
import "./design/globals/main-layout.scss";
import "./design/utilities/media-queries.scss"

// Types, interfaces, classes and enums
import { TasksData } from './app/model/tasksData';


// Components
import Header from './app/components/Header';
import NewTask from './app/components/NewTask';
import List from './app/components/List';
import Settings from './app/components/Settings';
import DeletePopUp from './app/components/DeletePopUp';
import Footer from "./app/components/Footer";



// Functions
import { getTasksData } from './app/functions/accessLocalStorage';


import { ColorThemeContext } from './app/colorThemeContext/ColorThemeContext';



const App: React.FC = () => {
    const [tasksData, setTasksData] = useState<TasksData>(getTasksData())
    const [isResetClicked, setIsResetClicked] = useState<boolean>(false)
    

    const newTaskInputRef = useRef<HTMLInputElement>(null)
    
    // Color mode and styles
    const { colorTheme } = useContext(ColorThemeContext)  
    
    // DRAG & DROP
    function handleDragEnd(result: DropResult): void {
        const { source, destination, draggableId } = result;

        if (!destination) { return }

        // If the task is put to its original spot 
        if (source.droppableId === destination.droppableId && source.index === destination.index) { return }

        // If the task is moved in the same list (only horizontally)
        if (source.droppableId === destination.droppableId && source.index !== destination.index) { 
            const STATUS = Number(source.droppableId)
            const newList = { ...tasksData.TaskLists[STATUS] }
            
            const newListTaskIdsOrder = [ ...newList.TaskIdsOrder ]

            // 1. Remove the task from its source index
            newListTaskIdsOrder.splice(source.index, 1)

            // 2. Put it in its destination index
            newListTaskIdsOrder.splice(destination.index, 0, draggableId)

            // Change the order in the new list
            newList.TaskIdsOrder = newListTaskIdsOrder
            

            setTasksData(prevTasksData => ({
                ...prevTasksData,
                TaskLists: {
                    ...prevTasksData.TaskLists,
                    [STATUS]: newList
                }
            }))
        }

        // If the item is moved to another list: change its status
        if (source.droppableId !== destination.droppableId) {
            // Remove if from the source list 
            const STATUS_SRC = Number(source.droppableId)
            const newSourceList = { ...tasksData.TaskLists[STATUS_SRC] }
            
            const newSourceListTaskIdsOrder = [ ...newSourceList.TaskIdsOrder ]
            newSourceListTaskIdsOrder.splice(source.index, 1)
            newSourceList.TaskIdsOrder = newSourceListTaskIdsOrder
            
            
            // Put it in the destination list
            const STATUS_DST = Number(destination.droppableId)
            const newDestinationList = { ...tasksData.TaskLists[STATUS_DST] }
            
            const newDestinationListTaskIdsOrder = [ ...newDestinationList.TaskIdsOrder ]
            newDestinationListTaskIdsOrder.splice(destination.index, 0, draggableId)
            newDestinationList.TaskIdsOrder = newDestinationListTaskIdsOrder
            
        
            setTasksData(prevTasksData => ({
                ...prevTasksData,
                
                // Update task status
                Tasks: {
                    ...prevTasksData.Tasks,
                    [draggableId]: {
                        ...prevTasksData.Tasks[draggableId],
                        status: STATUS_DST
                    }
                },

                // Update lists task orders
                TaskLists: {
                    ...prevTasksData.TaskLists,
                    [STATUS_SRC]: newSourceList,
                    [STATUS_DST]: newDestinationList
                }
            }))
        }
    }


    // Update localstorage
    useEffect(() => {
        localStorage.setItem("tasksData", JSON.stringify(tasksData))
    }, [tasksData])

    useEffect(() => {
        localStorage.setItem("preferredColorTheme", JSON.stringify(colorTheme))
    }, [colorTheme])


    return (
        <div className="app-container"
            data-colorTheme = {colorTheme}
        >
            <div className="main-layout">
                
                <Header />
                <Settings 
                    isResetClicked = {isResetClicked}
                    setIsResetClicked = {setIsResetClicked}
                />

                <NewTask 
                    newTaskInputRef = {newTaskInputRef}
                    setTasksData = {setTasksData}
                />

            
                <main className="lists-layout">                                
                    <DragDropContext onDragEnd = {handleDragEnd}>
                        {
                            tasksData.TaskListOrder.map((TaskListId: number) => (<List 
                                status = {tasksData.TaskLists[TaskListId].TaskListStatus} 
                                tasksData = {tasksData}
                                setTasksData = {setTasksData}
                            />)
                            )
                        }
                    </DragDropContext>
                </main>

                <Footer />
                

                {isResetClicked && <DeletePopUp 
                    setTasksData = {setTasksData} 
                    setIsDeleteClicked = {setIsResetClicked} 
                />}
            </div>
            
        </div>
        
    );
}

export default App;
