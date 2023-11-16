import React from 'react'

const Movie = ({movie}) => {
  return (
    <div className='movie'>
        <h5>{movie.title}</h5>
    </div>
  )
}

export default Movie