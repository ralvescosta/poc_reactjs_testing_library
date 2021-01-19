import React from 'react'
import "./styles.css"

export const CreateTodoView = () => {
  return (
    <div className="create-todo-container">
      <form className="create-todo-form">
        <label className="create-todo-label">Task Name</label>
        <input className="create-todo-input" />

        <label className="create-todo-label">Task Description</label>
        <input className="create-todo-input" />

        <label className="create-todo-label">Priority</label>
        <input className="create-todo-input" />

        <button className="create-todo-button">Add</button>
      </form>
    </div>
  )
}