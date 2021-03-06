import React from 'react'
import { fireEvent } from '@testing-library/react'
import { RepositoriesLiked } from '.'

import { RepositoryModel } from '../../models/repositoryModel'
import { renderWithRedux } from '../../tests/utils/renderRedux'
import '@testing-library/jest-dom'

const repositoriesFake:RepositoryModel[] = [
  {
    id: 1,
    description: 'Repository Vue',
    forks: 10,
    fullName: 'Repository Test VUE',
    openIssues: 11,
    ownerAvatarUrl: 'null',
    ownerId: 12,
    releasesUrl: 'relesed',
    stargazersCount: 100
  },
  {
    id: 2,
    description: 'Repository Teste',
    forks: 13,
    fullName: 'Repository Test React Testing Library',
    openIssues: 3,
    ownerAvatarUrl: 'null',
    ownerId: 5,
    releasesUrl: 'relesed',
    stargazersCount: 200
  }
]
const initialState = {
  repositoriesReducer: {
    repositories: repositoriesFake
  }

}

describe('Teste de integracao do RepositoriesLiked', () => {
  it('Testar se o componente irá renderizar  ', () => {
    const { getByText } = renderWithRedux(<RepositoriesLiked/>, initialState)

    expect(getByText(repositoriesFake[0].fullName)).toBeInTheDocument()
    expect(getByText(repositoriesFake[0].description)).toBeInTheDocument()
    expect(getByText(repositoriesFake[0].forks)).toBeInTheDocument()
    expect(getByText(repositoriesFake[0].openIssues)).toBeInTheDocument()

    expect(getByText(repositoriesFake[1].fullName)).toBeInTheDocument()
    expect(getByText(repositoriesFake[1].description)).toBeInTheDocument()
    expect(getByText(repositoriesFake[1].forks)).toBeInTheDocument()
    expect(getByText(repositoriesFake[1].openIssues)).toBeInTheDocument()
  })

  it('Testar a funcionalidade de deletetar o repositorio da minha lista ', () => {
    const { getAllByText, queryByText } = renderWithRedux(<RepositoriesLiked/>, initialState)

    expect(queryByText(repositoriesFake[0].fullName)).toBeInTheDocument()
    expect(queryByText(repositoriesFake[1].fullName)).toBeInTheDocument()

    const botoesDeletar = getAllByText('DELETE')
    fireEvent.click(botoesDeletar[0])

    expect(queryByText(repositoriesFake[0].fullName)).not.toBeInTheDocument()

    fireEvent.click(botoesDeletar[1])
    expect(queryByText(repositoriesFake[1].fullName)).not.toBeInTheDocument()
  })
})
