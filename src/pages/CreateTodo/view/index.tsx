import React, { FormEvent, useRef } from 'react'
import './styles.css'

import { useDispatch } from 'react-redux'

import { TodoModel } from '../../../models/TodoModel'

import { createTodoAction } from '../../../store/todosActions'

export const CreateTodoView = () => {
  const dispatchActions = useDispatch()

  const todoNameInputRef = useRef<HTMLInputElement>(null)
  const todoDescriptionInputRef = useRef<HTMLInputElement>(null)
  const priorityInputRef = useRef<HTMLInputElement>(null)

  const createATodo = (e: FormEvent) => {
    e.preventDefault()

    const todoName = todoNameInputRef.current?.value as string
    const todoDescription = todoDescriptionInputRef.current?.value as string
    const priority = priorityInputRef.current?.value as string

    try {
      const todo = TodoModel.create({ name: todoName, description: todoDescription, priority })

      dispatchActions(createTodoAction(todo))
      alert('Todo created')

      if (todoNameInputRef.current?.value) todoNameInputRef.current.value = ''
      if (todoDescriptionInputRef.current?.value) todoDescriptionInputRef.current.value = ''
      if (priorityInputRef.current?.value) priorityInputRef.current.value = ''
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="create-todo-container">
      <form className="create-todo-form" onSubmit={createATodo}>
        <label className="create-todo-label">Todo Name</label>
        <input className="create-todo-input" ref={todoNameInputRef}/>

        <label className="create-todo-label">Todo Description</label>
        <input className="create-todo-input" ref={todoDescriptionInputRef}/>

        <label className="create-todo-label">Priority</label>
        <input className="create-todo-input" ref={priorityInputRef}/>

        <button className="create-todo-button">Add</button>
      </form>
    </div>
  )
}
