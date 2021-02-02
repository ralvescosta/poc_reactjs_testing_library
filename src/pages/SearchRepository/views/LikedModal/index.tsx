import React from 'react'
import { ILikedModalViewModel } from '../../interfaces/ilikedModalViewModel'

import './styles.css'

type Props = {
  viewModel: ILikedModalViewModel
}

export const LikedModal = ({ viewModel }: Props) => {
  return (
    <div id="myModal" className={`liked-modal ${viewModel.modalDisplay}`}>
      <div className="liked-modal-content">
        <span className="liked-modal-close" onClick={viewModel.closeModal}>&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
}
