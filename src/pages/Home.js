import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      This is Web Application based on Movies API.
      <ul>
        <li>
          <Link to="/movies-in-theatres">Movies In Theatres</Link>
        </li>
        <li>
          <Link to="/popular-movies">Popular Movies</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home