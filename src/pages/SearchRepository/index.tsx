import React from 'react'
import { SearchUsecase } from './useCase/searchUsecase'

import { SearchView } from './view'
import { useSearchViewModel } from './viewModel/searchViewModel'
import { GithubApiRepository } from '../../repositories/githubapi.repository'

export const SearchRepository = () => {
  const githubApiRepository = new GithubApiRepository()
  const searchUsecase = new SearchUsecase(githubApiRepository)
  const viewModel = useSearchViewModel({ searchUsecase })

  return (
    <SearchView viewModel={viewModel}/>
  )
}
