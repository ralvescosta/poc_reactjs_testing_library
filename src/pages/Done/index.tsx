import React from 'react'

import { DoneView } from './view'
import { useDoneViewModel } from './viewModel/doneViewModel'
import { DoneUsecase } from './useCase/doneUsecase'

export const Done = () => {
  const doneUsecase = new DoneUsecase()
  const viewModel = useDoneViewModel({ doneUsecase })
  return (
    <DoneView viewModel={viewModel}/>
  )
}
