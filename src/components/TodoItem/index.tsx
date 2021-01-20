import React from 'react'
import { TodoModel } from '../../models/TodoModel'
import './styles.css'

import { useDispatch } from 'react-redux'

import { markTodoAsDone } from '../../store/todosActions'

type Props = {
  todo: TodoModel
}

export const TodoItem = ({ todo }: Props) => {
  const dispatchActions = useDispatch()

  const done = () => {
    dispatchActions(markTodoAsDone(todo.id))
  }

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
        <button className="todo-item-button success" onClick={done}>DONE</button>
      </div>
    </div>
  )
}
