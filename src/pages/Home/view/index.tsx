import React from 'react'
import "./styles.css"

import {TodoItem} from '../../../components/TodoItem'

export const HomeView = () => {
  return (
    <div className="todo-list-container">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />

    </div>
  )
}