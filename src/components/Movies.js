import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../Context'
import Movie from './Movie';
import Genre from './Genre';

const Movies = () => {
   const {movies,loading,activeGenre,fetchMoviesbyGenre} = useContext(MoviesContext);
   useEffect(()=>{
       fetchMoviesbyGenre();
   },[activeGenre])
  return (
    <>
    <Genre/>
    <div className='movies-container'>
        {loading?<h1>Loading...</h1>:movies.map(movie=>{
            return <Movie movie={movie} key={movie.id}/>
        })}
    </div>
    </>
  )
}

export default Movies