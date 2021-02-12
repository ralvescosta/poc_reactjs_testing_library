import React from 'react'

import { RepositoriesLikedView } from './views/index'
import { useRepositoriesLikedViewModel } from './viewModels/repositoriesLikedViewModel'

import { RepositoryItem } from './views/RepositoryItems/index'
import { useRepositoryItemModalViewModel } from './viewModels/repositoryItemViewModel'

const RepositoryItemComponent = ({ repository }: any) => {
  const viewModel = useRepositoryItemModalViewModel({ repository })
  return <RepositoryItem viewModel={viewModel}/>
}

export const RepositoriesLiked = () => {
  const viewModel = useRepositoriesLikedViewModel()
  return <RepositoriesLikedView viewModel={viewModel} RepositoryItemComponent={RepositoryItemComponent}/>
}
