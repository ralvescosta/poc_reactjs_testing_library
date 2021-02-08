import React from 'react'
import { ILikedModalViewModel } from '../../interfaces/ilikedModalViewModel'

import './styles.css'

type Props = {
  viewModel: ILikedModalViewModel
}

export const LikedModal = ({ viewModel }: Props) => {
  return (
    <div id="myModal" data-testid='modal' className={`liked-modal ${viewModel.modalDisplay}`}>
      <div className="liked-modal-content">
        <span className="liked-modal-close" onClick={viewModel.closeModal}>&times;</span>

        <div className="liked-modal-repository">
          <strong>{viewModel?.repository?.fullName}</strong>
          <img className="liked-modal-repository-image" src={viewModel?.repository?.ownerAvatarUrl} />
          <span>{viewModel?.repository?.description}</span>
          <button className="liked-modal-repository-button" onClick={viewModel.saveRepository}>SAVE</button>
        </div>
      </div>
    </div>
  )
}
