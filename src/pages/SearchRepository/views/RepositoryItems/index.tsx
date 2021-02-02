import React from 'react'

import './styles.css'

type Props = {
  viewModel: any
}

export const RepositoryItem = ({ viewModel }: Props) => {
  return (
    <li className="repository-item-container">
      <img className="repository-item-avatar" src={viewModel.repository.ownerAvatarUrl} />
      {console.log(viewModel)}
      <div className="repository-item-content">
        <strong>{viewModel.repository.fullName}</strong>

        <div className="repository-item-content-p-overflow">
          <p>{viewModel.repository.description}</p>
        </div>

        <div className="repository-item-content-indicators">

          <div>
            <strong>STARS: </strong><span>{viewModel.repository.stargazersCount}</span>
          </div>
          <div>
            <strong>FORKS: </strong><span>{viewModel.repository.forks}</span>
          </div>
          <div>
            <strong>ISSUES: </strong><span>{viewModel.repository.openIssues}</span>
          </div>

        </div>
      </div>

      <button className="repository-item-like-button" onClick={viewModel.openModal}>LIKE</button>
    </li>
  )
}
