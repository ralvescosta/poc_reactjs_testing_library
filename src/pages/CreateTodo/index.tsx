import React from 'react'

import { CreateTodoView } from './view'
import { useCreateTodo } from './viewModel/createTodoViewModel'
import { CreateTodoUsecase } from './useCase/createTodoUsecase'

export const CreateTodo = () => {
  const createTodoUsecase = new CreateTodoUsecase()
  const viewModel = useCreateTodo({ createTodoUsecase })

  return (
    <CreateTodoView viewModel={viewModel}/>
  )
}
