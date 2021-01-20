import React from 'react'
import './styles.css'

import { useSelector } from 'react-redux'
import { TStore } from '../../../store/rootReducers'

import { TodoItem } from '../../../components/TodoItem'
import { TodoModel } from '../../../models/TodoModel'

export const HomeView = () => {
  const todos = useSelector((store: TStore) => store.todosStore.todos.filter((todo: TodoModel) => todo.state === 'await'))
  return (
    <div className="todo-list-container">
      {
        todos.length
          ? (
              todos.map(todo => <TodoItem key={todo.id} todo={todo} context="Home" />)
            )
          : null
      }
    </div>
  )
}
