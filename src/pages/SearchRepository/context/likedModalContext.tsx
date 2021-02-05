import React, { createContext, useState } from 'react'
import { RepositoryModel } from '../../../models/repositoryModel'

export const LikedModalContext = createContext(null as any)

export const LikedModalContextProvider = ({ children, modalDisplayValue, repositoryValue }: any) => {
  const [repository, setRepository] = useState<RepositoryModel>(repositoryValue)
  const [modalDisplay, setModalDisplay] = useState<string>(modalDisplayValue || 'none')

  const defaultContext = {
    repository,
    setRepository,
    modalDisplay,
    setModalDisplay
  }

  return <LikedModalContext.Provider value={defaultContext}>{children}</LikedModalContext.Provider>
}
