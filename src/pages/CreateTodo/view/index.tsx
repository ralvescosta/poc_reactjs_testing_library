import React, { FormEvent, useRef } from 'react'
import './styles.css'

import { useDispatch } from 'react-redux'

import { TodoModel } from '../../../models/TodoModel'

import { createTodoAction } from '../../../store/todosActions'

export const CreateTodoView = () => {
  const dispatchActions = useDispatch()

  const todoNameRef = useRef<HTMLInputElement>(null)
  const todoDescriptionRef = useRef<HTMLInputElement>(null)
  const priorityRef = useRef<HTMLInputElement>(null)

  const createATodo = (e: FormEvent) => {
    e.preventDefault()

    const todoName = todoNameRef.current?.value as string
    const todoDescription = todoDescriptionRef.current?.value as string
    const priority = priorityRef.current?.value as string

    try {
      const todo = TodoModel.create({ name: todoName, description: todoDescription, priority })
      dispatchActions(createTodoAction(todo))
      alert('Todo created')

      if (todoNameRef.current?.value) todoNameRef.current.value = ''
      if (todoDescriptionRef.current?.value) todoDescriptionRef.current.value = ''
      if (priorityRef.current?.value) priorityRef.current.value = ''
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="create-todo-container">
      <form className="create-todo-form" onSubmit={createATodo}>
        <label className="create-todo-label">Todo Name</label>
        <input className="create-todo-input" ref={todoNameRef}/>

        <label className="create-todo-label">Todo Description</label>
        <input className="create-todo-input" ref={todoDescriptionRef}/>

        <label className="create-todo-label">Priority</label>
        <input className="create-todo-input" ref={priorityRef}/>

        <button className="create-todo-button">Add</button>
      </form>
    </div>
  )
}
