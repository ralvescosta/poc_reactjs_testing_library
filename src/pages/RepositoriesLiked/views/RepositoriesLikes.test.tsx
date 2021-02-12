import React from 'react'
import { render } from '@testing-library/react'
import { RepositoryModel } from '../../../models/repositoryModel'
import { IRepositoriesLikedViewModel } from '../interfaces/irepositoriesLikedViewModel'
import { useRepositoryItemModalViewModel } from '../viewModels/repositoryItemViewModel'
import { RepositoriesLikedView } from './index'
import { RepositoryItem } from './RepositoryItems'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { RootReducer } from '../../../store/rootReducers'
import '@testing-library/jest-dom'

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

const viewModelSut:IRepositoriesLikedViewModel = {
  deleteRepository: jest.fn(),
  repositories: repositorysFake
}

const RepositoryItemComponent = ({ repository }: any) => {
  const viewModel = useRepositoryItemModalViewModel({ repository })
  return <RepositoryItem viewModel={viewModel}/>
}
export const RepositoriesLiked = () => {
  return <RepositoriesLikedView viewModel={viewModelSut} RepositoryItemComponent={RepositoryItemComponent}/>
}
const store = createStore(RootReducer)
const Wrapper = () => {
  return (
    <Provider store={store}>
      <RepositoriesLiked/>
    </Provider>
  )
}
const sut = () => {
  const renderReturn = render(<Wrapper/>)
  return renderReturn
}
describe('Teste Integração Componetes RepositoryItens', () => {
  describe('Testando Renderização', () => {
    it('Testando renderiza ', () => {
      const { getByTestId } = sut()
      expect(getByTestId('container')).toBeInTheDocument()
    })
    it('Testar se vai ser exibido o card do repository Vue', () => {
      const { getByText } = sut()

      expect(getByText(repositorysFake[0].fullName)).toBeInTheDocument()
      expect(getByText(repositorysFake[0].description)).toBeInTheDocument()
      expect(getByText(repositorysFake[0].forks)).toBeInTheDocument()
      expect(getByText(repositorysFake[0].openIssues)).toBeInTheDocument()
      expect(getByText(repositorysFake[0].stargazersCount)).toBeInTheDocument()
    })
    it('Testar se vai ser exibido o card do repository React', () => {
      const { getByText } = sut()

      expect(getByText(repositorysFake[1].fullName)).toBeInTheDocument()
      expect(getByText(repositorysFake[1].description)).toBeInTheDocument()
      expect(getByText(repositorysFake[1].forks)).toBeInTheDocument()
      expect(getByText(repositorysFake[1].openIssues)).toBeInTheDocument()
      expect(getByText(repositorysFake[1].stargazersCount)).toBeInTheDocument()
    })
  })
})
