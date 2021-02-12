import { useDispatch, useSelector } from 'react-redux'
import { RepositoryModel } from '../../../models/repositoryModel'
import { deleteRepositoryAction } from '../../../store/repositoriesActions'

import { TRootReducer } from '../../../store/rootReducers'

import { IRepositoriesLikedViewModel } from '../interfaces/irepositoriesLikedViewModel'

export const useRepositoriesLikedViewModel = (): IRepositoriesLikedViewModel => {
  const repositories = useSelector((state:TRootReducer) => state.repositoriesReducer.repositories)

  const dispatchActions = useDispatch()

  const deleteRepository = (repository:RepositoryModel) => {
    dispatchActions(deleteRepositoryAction(repository))
  }
  return { repositories, deleteRepository }
}
