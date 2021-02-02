import React from 'react'

import './styles.css'

export const LikedModal = ({ viewModel }: any) => {
  return (
    <div id="myModal" className={`liked-modal ${viewModel.modalDisplay}`}>
      <div className="liked-modal-content">
        <span className="liked-modal-close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
}
