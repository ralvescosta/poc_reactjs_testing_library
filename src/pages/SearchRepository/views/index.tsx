import React from 'react'

import './styles.css'

import { ISearchViewModel } from '../interfaces/isearchViewModel'

type Props = {
  viewModel: ISearchViewModel
  LikedModalComponent: any
  RepositoryItemComponent: any
}

export const SearchView = ({ viewModel, LikedModalComponent, RepositoryItemComponent }: Props) => {
  return (

      <div className="search-view-container">

        <input className="search-view-input" placeholder="DIGITE O NOME DO REPOSITORIO..." ref={viewModel.searchInputRef}/>

        <button className="search-view-button" onClick={viewModel.search}>{viewModel.btnText}</button>

        {viewModel.repositories.length
          ? <ul className="search-view-repository-container">
            {
              viewModel.repositories.map(repository => (
                <RepositoryItemComponent key={repository.id} repository={repository} />
              ))
            }
            </ul>
          : null}

        <LikedModalComponent />
      </div>

  )
}
