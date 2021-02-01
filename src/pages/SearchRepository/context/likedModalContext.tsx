import React, { createContext, useState } from 'react'
import { RepositoryModel } from '../../../models/repositoryModel'

export const LikedModalContext = createContext(null as any)

export const LikedModalContextProvider = ({ children }: any) => {
  const [repository, setRepository] = useState<RepositoryModel>()
  const [modalDisplay, setModalDisplay] = useState<string>('none')

  const defaultContext = {
    repository,
    setRepository,
    modalDisplay,
    setModalDisplay
  }

  return <LikedModalContext.Provider value={defaultContext}>{children}</LikedModalContext.Provider>
}
