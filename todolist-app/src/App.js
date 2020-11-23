import { useState, useEffect } from 'react'

import './App.css';
import AddTask from './Components/AddTask'
import PendingTasks from './Components/PendingTasks'
import CompletedTasks from './Components/CompletedTasks'

function App() {
  const [taskList, setTaskList] = useState([])
  const [completedTaskList, setCompletedTaskList] = useState([])

  useEffect(() => {
    if (!localStorage.getItem("taskList")) {
      localStorage.setItem("taskList", [])
    } else {
      setTaskList(JSON.parse(localStorage.getItem("taskList")))
    }
    if (!localStorage.getItem("completedList")) {
      localStorage.setItem("completedList", [])
    } else {
      setCompletedTaskList(JSON.parse(localStorage.getItem("completedList")))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  useEffect(() => {
    localStorage.setItem("completedList", JSON.stringify(completedTaskList))
  }, [completedTaskList])

  const handleAddNewTask = (task) => {
    setTaskList([...taskList, task])
  }

  const handleAddCompletedTask = (index) => {
    let task = taskList[index]
    handleDeleteTask(index, 'pending')
    setCompletedTaskList([...completedTaskList, task])
  }

  const handleDeleteTask = (i, listName) => {
    if (listName === 'pending') {
      let remainingTasks = taskList.filter((task, index) => index !== i)
      setTaskList(remainingTasks)
    } else {
      let remainingTasks = completedTaskList.filter((task, index) => index !== i)
      setCompletedTaskList(remainingTasks)
    }
  }

  return (<>
    <h1 className='header'><i className="fas fa-tasks"></i>  Todo List</h1>
    <div className='container'>

      <div>
        <AddTask handleAddNewTask={handleAddNewTask} />
        <PendingTasks taskList={taskList} handleDeleteTask={handleDeleteTask} handleAddCompletedTask={handleAddCompletedTask} />
        <CompletedTasks completedTaskList={completedTaskList} handleAddNewTask={handleAddNewTask} handleDeleteTask={handleDeleteTask} />
      </div>
    </div>
  </>
  );
}

export default App;
