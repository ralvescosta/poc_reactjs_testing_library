import React from 'react'
import { IRepositoriesLikedViewModel } from '../interfaces/irepositoriesLikedViewModel'

import './styles.css'

type Props = {
  viewModel: IRepositoriesLikedViewModel
  RepositoryItemComponent: any
}

export const RepositoriesLikedView = ({ viewModel, RepositoryItemComponent }: Props) => {
  return (
    <div className="search-view-container">
      {viewModel.repositories.length
        ? <ul className="search-view-repository-container">
            {
              viewModel.repositories.map(repository => (
                <RepositoryItemComponent key={repository.id} repository={repository} />
              ))
            }
            </ul>
        : null}
    </div>
  )
}
