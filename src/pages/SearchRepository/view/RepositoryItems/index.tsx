import React from 'react'
import { RepositoryModel } from '../../../../models/repositoryModel'

import './styles.css'

type Props = {
  repository: RepositoryModel
}

export const RepositoryItem = ({ repository }: Props) => {
  return (
    <li >
      <h1>{repository.fullName}</h1>
    </li>
  )
}
