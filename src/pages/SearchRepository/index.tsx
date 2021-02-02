import React from 'react'
import { SearchUsecase } from './useCases/searchUsecase'

import { SearchView } from './views'
import { useSearchViewModel } from './viewModels/searchViewModel'
import { GithubApiRepository } from '../../repositories/githubapi.repository'
import { LikedModalContextProvider } from './context/likedModalContext'

import { LikedModal } from './views/LikedModal'
import { useLikedModalViewModel } from './viewModels/likedModalViewModel'
import { RepositoryItem } from './views/RepositoryItems'

import { useRepositoryItemModalViewModel } from './viewModels/repositoryItemViewModel'

const RepositoryItemComponent = ({ repository }: any) => {
  const viewModel = useRepositoryItemModalViewModel({ repository })
  return <RepositoryItem viewModel={viewModel} />
}

const LikedModelComponent = () => {
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
      RepositoryItemComponent={RepositoryItemComponent}
      LikedModalComponent={LikedModelComponent}
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
