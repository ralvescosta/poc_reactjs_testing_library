import React from 'react'
import { TodoModel } from '../../models/TodoModel'
import './styles.css'

import { useDispatch } from 'react-redux'

import { markTodoAsDoneAction, markTodoAsAwaitAction, deleteTodoAction } from '../../store/todosActions'

type Props = {
  todo: TodoModel
  context: 'Home' | 'Done'
}

export const TodoItem = ({ todo, context }: Props) => {
  const dispatchActions = useDispatch()

  const done = () => {
    dispatchActions(markTodoAsDoneAction(todo.id))
  }

  const rollBack = () => {
    dispatchActions(markTodoAsAwaitAction(todo.id))
  }

  const deleteTodo = () => {
    dispatchActions(deleteTodoAction(todo.id))
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
        {context === 'Home' ? <button className="todo-item-button success" onClick={done}>DONE</button> : null}
        {context === 'Done' ? <button className="todo-item-button success" onClick={rollBack}>ROLL BACK</button> : null}
        <button className="todo-item-button danger" onClick={deleteTodo}>DELETE</button>
      </div>
    </div>
  )
}
