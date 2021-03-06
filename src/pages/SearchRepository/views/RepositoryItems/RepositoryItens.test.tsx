import React from 'react'
import { LikedModalContextProvider } from '../../context/likedModalContext'
import { RepositoryItem } from './index'

import { IRepositoryItemViewModel } from '../../interfaces/irepositoryItemViewModel'
import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Testando renderização do Card', () => {
  beforeAll(
    () => {
      jest.clearAllMocks()
      cleanup()
    }
  )
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

  const viewModelStub:IRepositoryItemViewModel = {
    openModal: jest.fn(),
    repository: repositoryFake
  }

  const Wrapper = () => {
    return (
  <RepositoryItem viewModel={viewModelStub}/>
    )
  }
  const sut = (repositoryFake:any, modalDisplayValue:string) => {
    return render(
      <LikedModalContextProvider repositoryValue={repositoryFake} modalDisplayValue={modalDisplayValue} >
      <Wrapper/>
      </LikedModalContextProvider>

    )
  }
  it('Teste de renderização do componente ', () => {
    const { queryByText } = sut(repositoryFake, 'none')
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
    const { queryByText } = sut(repositoryFake, 'none')

    const LIKE = queryByText('LIKE')

    fireEvent.click(LIKE as any)

    expect(viewModelStub.openModal).toHaveBeenCalledTimes(1)
  })
})
