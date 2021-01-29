import React from 'react'

import './styles.css'

import { ISearchViewModel } from '../interfaces/isearchViewModel'

type Props = {
  viewModel: ISearchViewModel
}

export const SearchView = ({ viewModel }: Props) => {
  return (
    <div className="search-view-container">

      <input className="search-view-input" placeholder="DIGITE O NOME DO REPOSITORIO..." ref={viewModel.searchInputRef}/>

      <button className="search-view-button" onClick={viewModel.search}>BUSCAR</button>
    </div>
  )
}
