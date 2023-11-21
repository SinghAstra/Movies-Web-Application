import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams();
  const [movie,setMovie] = useState();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res=>res.json())
    .then(movie=>{setMovie(movie)})
  })
  return (
    <div>{movie?
      <div>
        <p>{movie.title}</p>
        <p>{movie.overview}</p>
      </div>
      :<h3>Loading...</h3>}</div>
  )
}

export default MovieDetail

