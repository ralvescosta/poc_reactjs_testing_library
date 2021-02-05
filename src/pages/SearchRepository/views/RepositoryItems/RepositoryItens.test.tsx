import React from 'react'
import { LikedModalContextProvider } from '../../context/likedModalContext'
import { RepositoryItem } from './index'
import { useRepositoryItemModalViewModel } from '../../viewModels/repositoryItemViewModel'
import { IRepositoryItemViewModel } from '../../interfaces/irepositoryItemViewModel'
import { cleanup, render } from '@testing-library/react'
const repositoryFake = {
  id: 1,
  description: 'Repository Teste',
  forks: 5,
  fullName: 'Repository Test React Testing Library',
  openIssues: 5,
  ownerAvatarUrl: 'null',
  ownerId: 5,
  releasesUrl: 'relesed',
  stargazersCount: 5
}

const Wrapper = () => {
  const repositoryStub :IRepositoryItemViewModel = {
    openModal: jest.fn(),
    repository: repositoryFake
  }
  const viewModel = useRepositoryItemModalViewModel(repositoryStub)
  return (
<RepositoryItem viewModel={viewModel}/>
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
    const {} = render(
    <LikedModalContextProvider repositoryValue={repositoryFake} modalDisplayValue={'none'} >
    <Wrapper/>
    </LikedModalContextProvider>
    )
  })
})
