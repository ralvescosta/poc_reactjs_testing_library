import React from 'react'
import { SearchUsecase } from './useCase/searchUsecase'

import { SearchView } from './view'
import { useSearchViewModel } from './viewModel/searchViewModel'

export const SearchRepository = () => {
  const searchUsecase = new SearchUsecase()
  const viewModel = useSearchViewModel({ searchUsecase })

  return (
    <SearchView viewModel={viewModel}/>
  )
}
