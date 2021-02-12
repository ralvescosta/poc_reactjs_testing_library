import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, waitFor } from '@testing-library/react'

import { useLikedModalViewModel } from '../../viewModels/likedModalViewModel'
import { LikedModal } from './index'
import { LikedModalContextProvider } from '../../context/likedModalContext'

import { renderWithRedux } from '../../../../tests/utils/renderRedux'

describe('test da view ', () => {
  beforeAll(() => {
    jest.clearAllMocks()
    cleanup()
  })

  const Wrapper: React.FC = () => {
    const viewModel = useLikedModalViewModel()
    return (
    <LikedModal viewModel={viewModel} />
    )
  }

  const sut = (repositoryFake:any, modalDisplayValue:string) => {
    return renderWithRedux(
      <LikedModalContextProvider repositoryValue={repositoryFake}
       modalDisplayValue={modalDisplayValue} >
          <Wrapper/>
        </LikedModalContextProvider>, {})
  }

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

  it('Testar se o componete está renderizando', () => {
    sut(repositoryFake, 'block')

    waitFor(() => {
      expect('Repository Test React Testing Library').toBeInTheDocument()
    })
  })

  it('Testar se o componente irá fechar ao clicar no × ', () => {
    const { getByText, getByTestId } = sut(repositoryFake, 'block')
    const modal = getByTestId('modal')
    const buttonClose = getByText('×')

    expect(modal).toHaveClass('liked-modal block')

    fireEvent.click(buttonClose)

    expect(modal).toHaveClass('liked-modal none')
  })

  it('Testar se o componente irá fechar ao clicar no  salvar ', () => {
    const { getByText, getByTestId } = sut(repositoryFake, 'block')
    const modal = getByTestId('modal')
    const save = getByText('SAVE')

    expect(modal).toHaveClass('liked-modal block')

    fireEvent.click(save)

    expect(modal).toHaveClass('liked-modal none')
  })
})
