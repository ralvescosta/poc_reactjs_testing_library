import React from 'react'
import { RepositoryModel } from '../../../../models/repositoryModel'

import './styles.css'

type Props = {
  repository: RepositoryModel
}

export const RepositoryItem = ({ repository }: Props) => {
  return (
    <li className="repository-item-container">
      <img className="repository-item-avatar" src={repository.ownerAvatarUrl} />

      <div className="repository-item-content">
        <strong>{repository.fullName}</strong>

        <div className="repository-item-content-p-overflow">
          <p>{repository.description}</p>
        </div>

        <div className="repository-item-content-indicators">

          <div>
            <strong>STARS: </strong><span>{repository.stargazersCount}</span>
          </div>
          <div>
            <strong>FORKS: </strong><span>{repository.forks}</span>
          </div>
          <div>
            <strong>ISSUES: </strong><span>{repository.openIssues}</span>
          </div>

        </div>
      </div>
    </li>
  )
}
