import React from 'react'
import { SearchUsecase } from './useCase/searchUsecase'

import { SearchView } from './view'
import { useSearchViewModel } from './viewModel/searchViewModel'
import { GithubApiRepository } from '../../repositories/githubapi.repository'
import { LikedModalContextProvider } from './context/likedModalContext'

import { LikedModal } from './view/LikedModal'
import { useLikedModalViewModel } from './viewModel/likedModalViewModel'
import { RepositoryItem } from './view/RepositoryItems'
import { useRepositoryItemModalViewModel } from './viewModel/repositoryItemViewModel'

const RepositoryItemWrapper = ({ repository }: any) => {
  const viewModel = useRepositoryItemModalViewModel({ repository })
  return <RepositoryItem viewModel={viewModel} />
}

const LikedModelWrapper = () => {
  const viewModel = useLikedModalViewModel()
  return <LikedModal viewModel={viewModel} />
}

const ContextWrapper = () => {
  const githubApiRepository = new GithubApiRepository()
  const searchUsecase = new SearchUsecase(githubApiRepository)
  const viewModel = useSearchViewModel({ searchUsecase })

  return (
    <SearchView
      viewModel={viewModel}
      RepositoryItemComponent={RepositoryItemWrapper}
      LikedModalComponent={LikedModelWrapper}
    />
  )
}

export const SearchRepository = () => {
  return (
    <LikedModalContextProvider>
      <ContextWrapper />
    </LikedModalContextProvider>
  )
}
