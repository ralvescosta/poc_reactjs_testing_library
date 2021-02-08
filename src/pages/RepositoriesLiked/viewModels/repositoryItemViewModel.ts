import { useDispatch } from 'react-redux'

import { deleteRepositoryAction } from '../../../store/repositoriesActions'

import { RepositoryModel } from '../../../models/repositoryModel'

import { IRepositoryItemViewModel } from '../interfaces/irepositoryItemViewModel'

type Props = {
  repository: RepositoryModel
}

export const useRepositoryItemModalViewModel = ({ repository }: Props): IRepositoryItemViewModel => {
  const dispatchActions = useDispatch()

  const deleteRepository = () => {
    dispatchActions(deleteRepositoryAction(repository))
  }

  return { repository, deleteRepository }
}
