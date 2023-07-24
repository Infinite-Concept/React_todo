import React, { useState } from 'react';
import styles from './navbar.module.css';
import {AiOutlinePlusCircle} from 'react-icons/ai'

function Header({onAddTask}) {
  const [title, setTitle] = useState('')

  function handleSubmit(event){
    event.preventDefault()
      onAddTask(title)
      setTitle('')
  }

  function onChangeTitle(event){
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <p style={{fontSize: '40px'}}>Todo</p>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input type="text" placeholder='Add a new task' value={title} onChange={onChangeTitle} />
        <button>Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}

export default Header