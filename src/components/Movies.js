import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../Context'
import Movie from './Movie';

const Movies = () => {
   const {movies,fetchMoviesbyGenre} = useContext(MoviesContext);
   useEffect(()=>{
       fetchMoviesbyGenre();
   },[])
  return (
    <div className='movies'>
        {movies.map(movie=>{
            return <Movie movie={movie} key={movie.id}/>
        })}
    </div>
  )
}

export default Movies