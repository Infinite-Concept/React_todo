import React, { useEffect, useState } from 'react'
import Header from './component/Header/Header'
import Task from './component/Task/Task'

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {

  const [tasks, setTasks] = useState([])

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved){
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
      loadSavedTasks()
  },[])

  function setTaskAndSave(newTask){
    setTasks(newTask)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask))
}

  function addTask(tasktitle){
    setTaskAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: tasktitle,
      isCompleted: false
    }])
  }

  

  function deleteTask(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTaskAndSave(newTasks)
  }

  function toggleTaskid(taskid){
    const newtasks = tasks.map(task => {
      if(task.id === taskid){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTaskAndSave(newtasks)
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <Task tasks={tasks}
      onDelete={deleteTask}
      onComplete={toggleTaskid} />
    </div>
  )
}

export default App