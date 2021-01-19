import React from 'react'
import './styles.css'

export const TodoItem = () => {
  return (
    <div className="todo-item-container">
      <span className="todo-item-priority">Priority: 5</span>

      <div className="todo-item-text-content">
        <strong className="todo-item-title">Name: </strong>
        <span className="todo-item-description">Loren Ipsum</span>
      </div>

      <div className="todo-item-text-content">
        <strong className="todo-item-title">Description: </strong>
        <span className="todo-item-description">Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum</span>
      </div>
      
      <div className="todo-item-buttons-content">
        <button className="todo-item-button success">DELETE</button>
        <button className="todo-item-button danger">DONE</button>
      </div>
    </div>
  )
}