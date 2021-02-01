import { useContext } from 'react'

import { LikedModalContext } from '../context/likedModalContext'

export const useRepositoryItemModalViewModel = ({ repository }: any): any => {
  const { setModalDisplay } = useContext(LikedModalContext)

  const openModal = () => {
    setModalDisplay('block')
  }

  return { openModal, repository }
}
