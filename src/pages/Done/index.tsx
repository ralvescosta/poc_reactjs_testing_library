import React from 'react'
import './styles.css'

import { useSelector } from 'react-redux'
import { TStore } from '../../store/rootReducers'

import { TodoItem } from '../../components/TodoItem'
import { TodoModel } from '../../models/TodoModel'

export const DoneView = () => {
  const todos = useSelector((store: TStore) => store.todosStore.todos.filter((todo: TodoModel) => todo.state === 'done'))
  return (
    <div className="todo-done-list-container">
      {
        todos.length
          ? (
              todos.map(todo => <TodoItem key={todo.id} todo={todo} context="Done" />)
            )
          : null
      }
    </div>
  )
}
