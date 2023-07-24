import React from 'react' 
import styles from './task.module.css'
import Tasks from '../Tasks/Tasks'

function Task({tasks, onComplete, onDelete}) {

    const tasksQuality = tasks.length
    const completeTasks = tasks.filter(task => task.isCompleted).length
  return (
    <section className={styles.tasks}>
        <header className={styles.header}>
            <div>
                <p>Create tasks</p>
                <span>{tasksQuality}</span>
            </div>

            <div>
                <p className={styles.textPurple}>Completed tasks</p>
                <span>{completeTasks} of {tasksQuality}</span>
            </div>
        </header>

        <div className={styles.list}>
            {tasks.map(task => (
                <Tasks key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
            ))}
        </div>
    </section>
  )
}

export default Task