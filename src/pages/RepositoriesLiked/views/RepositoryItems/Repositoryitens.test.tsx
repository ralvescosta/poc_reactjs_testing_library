import React from 'react'

import { RepositoryItem } from './index'
import { IRepositoryItemLikedViewModel } from '../../interfaces/irepositoryItemViewModel'
import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

const repositoryFake:any = {
  id: 1,
  description: 'Repository Teste',
  forks: 10,
  fullName: 'Repository Test React Testing Library',
  openIssues: 3,
  ownerAvatarUrl: 'null',
  ownerId: 5,
  releasesUrl: 'relesed',
  stargazersCount: 200
}

const viewModelStub:IRepositoryItemLikedViewModel = {
  deleteRepository: jest.fn(),
  repository: repositoryFake
}

const Wrapper = () => {
  return (
  <RepositoryItem viewModel={viewModelStub}/>
  )
}
describe('Testando renderização do Card', () => {
  beforeAll(
    () => {
      jest.clearAllMocks()
      cleanup()
    }
  )
  it('should ', () => {
    const { queryByText } = render(
    <Wrapper/>
    )
    const starts = queryByText(repositoryFake.stargazersCount)
    const forks = queryByText(repositoryFake.forks)
    const issues = queryByText(repositoryFake.openIssues)
    const fullName = queryByText(repositoryFake.fullName)

    expect(fullName).toBeInTheDocument()
    expect(forks).toBeInTheDocument()
    expect(starts).toBeInTheDocument()
    expect(issues).toBeInTheDocument()
  })

  it('Testar se o click irá acontecer no botão', () => {
    const { queryByText } = render(<Wrapper/>)
    const DELETE = queryByText('DELETE')

    fireEvent.click(DELETE as any)

    expect(viewModelStub.deleteRepository).toHaveBeenCalledTimes(1)
  })
})
