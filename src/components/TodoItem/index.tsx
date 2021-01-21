import React from 'react'
import { TodoModel } from '../../models/TodoModel'
import './styles.css'

type Props = {
  todo: TodoModel
  context: 'Home' | 'Done'
  doneButton?: any
  deleteButton: any
  rollBackButton?: any
}

export const TodoItem = ({ todo, context, doneButton, deleteButton, rollBackButton }: Props) => {
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
        {context === 'Home' ? <button className="todo-item-button success" onClick={doneButton}>DONE</button> : null}
        {context === 'Done' ? <button className="todo-item-button success" onClick={rollBackButton}>ROLL BACK</button> : null}
        <button className="todo-item-button danger" onClick={deleteButton}>DELETE</button>
      </div>
    </div>
  )
}
