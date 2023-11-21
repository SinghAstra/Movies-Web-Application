import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(movie => {
        console.log(movie);
        setMovie(movie)
      })
  }, [id])
  return (
    <div>{movie ?
      <div className='movie-container'>
        <div className='movie-image-container'>
          <img src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path} alt='movie' />
          <p>{movie.status}</p>
        </div>
        <div className='movie-info'>
          <h4>{movie.title}</h4>
          <ul>
            {movie.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>
            })}
          </ul>
          <p>{movie.overview}</p>
        </div>
      </div>
      : <h3>Loading...</h3>}</div>
  )
}

export default MovieDetail

