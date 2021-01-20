import React from 'react'

import { CreateTodoView } from './view'
import { useCreateTodoViewModel } from './viewModel/createTodoViewModel'
import { CreateTodoUsecase } from './useCase/createTodoUsecase'

export const CreateTodo = () => {
  const createTodoUsecase = new CreateTodoUsecase()
  const viewModel = useCreateTodoViewModel({ createTodoUsecase })

  return (
    <CreateTodoView viewModel={viewModel}/>
  )
}
