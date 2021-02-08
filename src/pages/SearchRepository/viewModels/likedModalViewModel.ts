import { useContext } from 'react'

import { useDispatch } from 'react-redux'

import { LikedModalContext } from '../context/likedModalContext'
import { ILikedModalViewModel } from '../interfaces/ilikedModalViewModel'

import { createRepositoryAction } from '../../../store/repositoriesActions'

export const useLikedModalViewModel = (): ILikedModalViewModel => {
  const dispatchActions = useDispatch()
  const { modalDisplay, repository, setModalDisplay } = useContext(LikedModalContext)

  const closeModal = async () => {
    setModalDisplay('none')
  }

  const saveRepository = () => {
    dispatchActions(createRepositoryAction(repository))
    setModalDisplay('none')
  }

  return { modalDisplay, repository, closeModal, saveRepository }
}
