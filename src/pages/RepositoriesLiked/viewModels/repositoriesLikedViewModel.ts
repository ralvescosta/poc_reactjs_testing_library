import { useSelector } from 'react-redux'

import { TRootReducer } from '../../../store/rootReducers'

import { IRepositoriesLikedViewModel } from '../interfaces/irepositoriesLikedViewModel'

export const useRepositoriesLikedViewModel = (): IRepositoriesLikedViewModel => {
  const repositories = useSelector((state:TRootReducer) => state.repositoriesReducer.repositories)

  return { repositories }
}
