import React from 'react'
import { fireEvent } from '@testing-library/react'
import { RepositoriesLiked } from '.'

import { RepositoryModel } from '../../models/repositoryModel'

import { renderWithRedux } from '../../tests/utils/renderRedux'

const repositorysFake:RepositoryModel[] = [
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
    repositories: repositorysFake
  }

}

describe('Name of the group', () => {
  it('should ', () => {
    const { getAllByText, debug } = renderWithRedux(<RepositoriesLiked/>, initialState)
    const DELETE = getAllByText('DELETE')

    fireEvent.click(DELETE[0])
    fireEvent.click(DELETE[1])

    debug()
  })
})
