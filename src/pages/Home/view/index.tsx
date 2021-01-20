import React from 'react'
import './styles.css'

import { useSelector } from 'react-redux'

import { TodoItem } from '../../../components/TodoItem'
import { TodoModel } from '../../../models/TodoModel'

export const HomeView = () => {
  const todos = useSelector((store: any) => store.todosStore.todos) as TodoModel[]
  return (
    <div className="todo-list-container">
      {
        todos.length
          ? (
              todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
            )
          : null
      }
    </div>
  )
}
