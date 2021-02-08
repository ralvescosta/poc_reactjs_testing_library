import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'

import { useLikedModalViewModel } from '../../viewModels/likedModalViewModel'
import { LikedModal } from './index'

import { LikedModalContextProvider } from '../../context/likedModalContext'
import { RootReducer } from '../../../../store/rootReducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(RootReducer)
const Wrapper: React.FC = () => {
  const viewModel = useLikedModalViewModel()
  return (
  <LikedModal viewModel={viewModel} />
  )
}

describe('test da view ', () => {
  beforeAll(() => {
    jest.clearAllMocks()
    cleanup()
  })
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
    render(<Provider store={store}>
    <LikedModalContextProvider repositoryValue={repositoryFake} modalDisplayValue={'block'} >
        <Wrapper/>
      </LikedModalContextProvider>

    </Provider>
    )
    waitFor(() => {
      expect('Repository Test React Testing Library').toBeInTheDocument()
    })
  })

  it('Testar se o componente irá fechar ao clicar no × ', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
 <LikedModalContextProvider
        repositoryValue={repositoryFake}
        modalDisplayValue={'block'}
      >
        <Wrapper />
      </LikedModalContextProvider>
      </Provider>

    )
    const modal = getByTestId('modal')
    const buttonClose = getByText('×')

    expect(modal.className).toBe('liked-modal block')

    fireEvent.click(buttonClose)

    expect(modal.className).toBe('liked-modal none')
  })
})
