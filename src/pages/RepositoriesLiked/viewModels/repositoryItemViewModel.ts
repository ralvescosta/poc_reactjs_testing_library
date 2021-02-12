import { useDispatch } from 'react-redux'

import { deleteRepositoryAction } from '../../../store/repositoriesActions'

import { RepositoryModel } from '../../../models/repositoryModel'

import { IRepositoryItemLikedViewModel } from '../interfaces/irepositoryItemViewModel'

type Props = {
  repository: RepositoryModel
}

export const useRepositoryItemModalViewModel = ({ repository }: Props): IRepositoryItemLikedViewModel => {
  const dispatchActions = useDispatch()

  const deleteRepository = () => {
    dispatchActions(deleteRepositoryAction(repository))
  }

  return { repository, deleteRepository }
}
