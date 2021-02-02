import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigate-list">
        <li>
          <Link className="text-with" to="/">Home</Link>
        </li>

        <li>
          <Link className="text-with" to="/search">Search Repositories</Link>
        </li>
      </ul>
    </nav>
  )
}
