import React from 'react'

import { useYourImagination } from './viewmodels/todo_viewmodel'
import { TodoController } from './controllers/todo_controller'
import { TodoRepository } from './repositories/todo_repository'
import { TodoPage } from './views/todo_view'

function App () {
  const todoRepository = new TodoRepository()
  const todoController = new TodoController(todoRepository)

  return (
    <>
      <TodoPage viewModel={useYourImagination({ todoController })}/>
      <TodoPage viewModel={useYourImagination({ todoController })}/>
      <TodoPage viewModel={useYourImagination({ todoController })}/>
      <TodoPage viewModel={useYourImagination({ todoController })}/>
      <TodoPage viewModel={useYourImagination({ todoController })}/>
      <TodoPage viewModel={useYourImagination({ todoController })}/>
      <TodoPage viewModel={useYourImagination({ todoController })}/>
    </>
  )
}

export default App
