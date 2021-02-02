import { useContext } from 'react'

import { LikedModalContext } from '../context/likedModalContext'
import { ILikedModalViewModel } from '../interfaces/ilikedModalViewModel'

export const useLikedModalViewModel = (): ILikedModalViewModel => {
  const { modalDisplay, setModalDisplay } = useContext(LikedModalContext)

  const openModal = async () => {
    setModalDisplay('block')
  }

  return { modalDisplay, openModal }
}
