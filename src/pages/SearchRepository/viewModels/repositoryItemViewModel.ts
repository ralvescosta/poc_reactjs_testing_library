import { useContext } from 'react'
import { RepositoryModel } from '../../../models/repositoryModel'

import { LikedModalContext } from '../context/likedModalContext'
import { IRepositoryItemViewModel } from '../interfaces/irepositoryItemViewModel'

type Props = {
  repository: RepositoryModel
}

export const useRepositoryItemModalViewModel = ({ repository }: Props): IRepositoryItemViewModel => {
  const { setModalDisplay } = useContext(LikedModalContext)

  const openModal = () => {
    setModalDisplay('block')
  }

  return { openModal, repository }
}
