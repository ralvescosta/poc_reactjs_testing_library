import React from 'react'
import { RepositoryModel } from '../../models/repositoryModel'

import { ISearchGithubApiRepository } from './interfaces/isearchGithubApiRepository'
import { SearchUsecase } from './useCases/searchUsecase'
import { useSearchViewModel } from './viewModels/searchViewModel'
import { SearchView } from './views'
import { useRepositoryItemModalViewModel } from './viewModels/repositoryItemViewModel'
import { RepositoryItem } from './views/RepositoryItems'
import { useLikedModalViewModel } from './viewModels/likedModalViewModel'
import { LikedModal } from './views/LikedModal'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { LikedModalContextProvider } from './context/likedModalContext'

import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { RootReducer } from '../../store/rootReducers'

const repositoryFake:RepositoryModel[] = [
  {
    id: 1,
    description: 'repositorio do React',
    forks: 10,
    fullName: 'React',
    openIssues: 3,
    ownerAvatarUrl: 'null',
    ownerId: 5,
    releasesUrl: 'relesed',
    stargazersCount: 200
  },
  {
    id: 2,
    description: 'repositoio do Vue',
    forks: 10,
    fullName: 'Vue',
    openIssues: 3,
    ownerAvatarUrl: 'null',
    ownerId: 5,
    releasesUrl: 'relesed',
    stargazersCount: 200
  }
]

const githubApiRepositoryStub:ISearchGithubApiRepository = {
  searchRepository: () => Promise.resolve(repositoryFake)

}

const RepositoryItemComponent = ({ repository }: any) => {
  const viewModel = useRepositoryItemModalViewModel({ repository })
  return <RepositoryItem viewModel={viewModel} />
}

const LikedModelComponent = () => {
  const viewModel = useLikedModalViewModel()
  return <LikedModal viewModel={viewModel} />
}
const store = createStore(RootReducer)
const Wrapper = () => {
  const searchUsecase = new SearchUsecase(githubApiRepositoryStub)
  const viewModel = useSearchViewModel({ searchUsecase })
  return (
   < Provider store={store}>
  <SearchView viewModel={viewModel} LikedModalComponent={LikedModelComponent}
  RepositoryItemComponent={RepositoryItemComponent}/>
  </Provider>
  )
}

describe('Buscar ', () => {
  it('Testando renderização de componentes ', async () => {
    const { getByPlaceholderText, getByText, getAllByTestId } = render(

<LikedModalContextProvider>
      <Wrapper/>
    </LikedModalContextProvider>

    )
    const input = getByPlaceholderText('DIGITE O NOME DO REPOSITORIO...')
    const buscar = getByText('BUSCAR')
    await waitFor(() => {
      fireEvent.change(input, { target: { value: 'react' } })
      fireEvent.click(buscar)
    })
    const repositorys = getAllByTestId('repositoryItem')

    expect(repositorys.length).toBe(2)
  })

  it('Testando aberura Modal  ', async () => {
    const { getByPlaceholderText, getByText, getAllByText, getByTestId } = render(

 <LikedModalContextProvider>
      <Wrapper/>
    </LikedModalContextProvider>

    )
    const input = getByPlaceholderText('DIGITE O NOME DO REPOSITORIO...')
    const buscar = getByText('BUSCAR')

    await waitFor(() => {
      fireEvent.change(input, { target: { value: 'react' } })
      fireEvent.click(buscar)
    })

    const likeButton = getAllByText('LIKE')
    const modal = getByTestId('modal')
    expect(modal.className).toBe('liked-modal none')

    fireEvent.click(likeButton[0])
    expect(modal.className).toBe('liked-modal block')
  })

  it('Testando Conteudo do modal React', async () => {
    const { getByPlaceholderText, getByText, getAllByText, getByTestId } = render(

    <LikedModalContextProvider>
      <Wrapper/>
    </LikedModalContextProvider>

    )
    const input = getByPlaceholderText('DIGITE O NOME DO REPOSITORIO...')
    const buscar = getByText('BUSCAR')

    await waitFor(() => {
      fireEvent.change(input, { target: { value: 'react' } })
      fireEvent.click(buscar)
    })

    const likeButton = getAllByText('LIKE')
    const modal = getByTestId('modal')
    const fullName = getByTestId('modal-repository-full-name')
    // const buttonClose = getByText('×')
    expect(modal.className).toBe('liked-modal none')

    await waitFor(() => {
      fireEvent.click(likeButton[0])
    })
    expect(fullName.innerHTML).toBe('React')
  })

  it('Testando Conteudo do modal Vue ', async () => {
    const { getByPlaceholderText, getByText, getAllByText, getByTestId } = render(

 <LikedModalContextProvider>
      <Wrapper/>
    </LikedModalContextProvider>

    )
    const input = getByPlaceholderText('DIGITE O NOME DO REPOSITORIO...')
    const buscar = getByText('BUSCAR')

    await waitFor(() => {
      fireEvent.change(input, { target: { value: 'react' } })
      fireEvent.click(buscar)
    })

    const likeButton = getAllByText('LIKE')
    const modal = getByTestId('modal')
    const fullName = getByTestId('modal-repository-full-name')
    const buttonClose = getByText('×')
    expect(modal.className).toBe('liked-modal none')

    await waitFor(() => {
      fireEvent.click(likeButton[1])
    })
    expect(modal).toHaveClass('block')
    expect(fullName.innerHTML).toBe('Vue')

    fireEvent.click(buttonClose)
    expect(modal).toHaveClass('none')
  })
})
