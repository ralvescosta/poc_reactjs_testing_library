import React from 'react'

import './styles.css'

import { ISearchViewModel } from '../interfaces/isearchViewModel'
import { RepositoryItem } from './RepositoryItems'

type Props = {
  viewModel: ISearchViewModel
}

export const SearchView = ({ viewModel }: Props) => {
  return (
    <div className="search-view-container">

      <input className="search-view-input" placeholder="DIGITE O NOME DO REPOSITORIO..." ref={viewModel.searchInputRef}/>

      <button className="search-view-button" onClick={viewModel.search}>{viewModel.btnText}</button>

      {viewModel.repositories.length
        ? <ul className="search-view-repository-container">
           {
             viewModel.repositories.map(repository => (
              <RepositoryItem key={repository.id} repository={repository} />
             ))
           }
          </ul>
        : null}
    </div>
  )
}
