import React from 'react'
import { TodoModel } from '../../models/TodoModel'
import './styles.css'

type Props = {
  todo: TodoModel
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <div className="todo-item-container">
      <span className="todo-item-priority">Priority: {todo.priority}</span>

      <div className="todo-item-text-content">
        <strong className="todo-item-title">Name: </strong>
        <span className="todo-item-description">{todo.name}</span>
      </div>

      <div className="todo-item-text-content">
        <strong className="todo-item-title">Description: </strong>
        <span className="todo-item-description">{todo.description}</span>
      </div>

      <div className="todo-item-buttons-content">
        <button className="todo-item-button danger">DELETE</button>
        <button className="todo-item-button success">DONE</button>
      </div>
    </div>
  )
}
