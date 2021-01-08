import React from 'react'
import PropTypes from 'prop-types'

export const TodoPage = ({ viewModel }) => {
  return (
    <div>
      <h1>TO DO</h1>
      <article>
        <section>Name: {viewModel.name}</section>
        <section>Count: {viewModel.count}</section>
      </article>
    </div>
  )
}

TodoPage.propTypes = {
  viewModel: PropTypes.shape({
    name: PropTypes.string,
    count: PropTypes.number
  }).isRequired
}
