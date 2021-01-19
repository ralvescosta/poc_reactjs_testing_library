import React from 'react'
import './styles.css'

export const TodoItem = () => {
  return (
    <div>
      <span>5</span>

      <div>
        <strong>Name: </strong>
        <span>Loren Ipsum</span>
      </div>

      <div>
        <strong>Description: </strong>
        <span>Loren Ipsum</span>
      </div>
      
      <div>
        <button>Delete</button>
        <button>Done</button>
      </div>
    </div>
  )
}