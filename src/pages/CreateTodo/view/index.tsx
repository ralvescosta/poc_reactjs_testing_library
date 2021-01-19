import React from 'react'
import "./styles.css"

export const CreateTodoView = () => {
  return (
    <div className="container">
      <form className="form">
        <label className="label">Task Name</label>
        <input className="input" />

        <label className="label">Task Description</label>
        <input className="input" />

        <label className="label">Priority</label>
        <input className="input" />

        <button className="button">Add</button>
      </form>
    </div>
  )
}