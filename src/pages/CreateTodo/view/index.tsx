import React from 'react'

export const CreateTodoPage = () => {
  return (
    <div className="container">
      <form className="form">
        <label>Task Name</label>
        <input />

        <label>Task Description</label>
        <input />

        <label>Priority</label>
        <input />

        <button>Add</button>
      </form>
    </div>
  )
}