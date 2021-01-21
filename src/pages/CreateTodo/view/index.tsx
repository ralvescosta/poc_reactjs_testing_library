import React from 'react'
import { IUseCreateTodoViewModel } from '../viewModel/createTodoViewModel'
import './styles.css'

type Props = {
  viewModel: IUseCreateTodoViewModel
}

export const CreateTodoView = ({ viewModel }: Props) => {
  return (
    <div className="create-todo-container">
      <form className="create-todo-form" onSubmit={viewModel.createATodo} data-testid="form-create-todo">
        <label className="create-todo-label">Todo Name</label>
        <input className="create-todo-input" ref={viewModel.todoNameInputRef} name="name" placeholder="Todo Name"/>

        <label className="create-todo-label">Todo Description</label>
        <input className="create-todo-input" ref={viewModel.todoDescriptionInputRef} name="description" placeholder="Todo Description" />

        <label className="create-todo-label">Priority</label>
        <input className="create-todo-input" ref={viewModel.priorityInputRef} name="priority" placeholder="Todo Priority" />

        <button className="create-todo-button" name="button">Add</button>
      </form>
    </div>
  )
}
