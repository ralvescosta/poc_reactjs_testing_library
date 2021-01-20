import React from 'react'
import './styles.css'

type Props = {
  viewModel: any
}

export const CreateTodoView = ({ viewModel }: Props) => {
  return (
    <div className="create-todo-container">
      <form className="create-todo-form" onSubmit={viewModel.createATodo}>
        <label className="create-todo-label">Todo Name</label>
        <input className="create-todo-input" ref={viewModel.todoNameInputRef}/>

        <label className="create-todo-label">Todo Description</label>
        <input className="create-todo-input" ref={viewModel.todoDescriptionInputRef}/>

        <label className="create-todo-label">Priority</label>
        <input className="create-todo-input" ref={viewModel.priorityInputRef}/>

        <button className="create-todo-button">Add</button>
      </form>
    </div>
  )
}
