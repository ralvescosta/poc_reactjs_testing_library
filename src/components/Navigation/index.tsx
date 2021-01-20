import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigate-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/create">Create</Link>
        </li>

        <li>
          <Link to="/done">Done</Link>
        </li>
      </ul>
    </nav>
  )
}
