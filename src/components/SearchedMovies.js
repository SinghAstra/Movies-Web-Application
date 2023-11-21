import React, { useContext, useEffect,  } from 'react'
import { MoviesContext } from '../Context'
import Movie from './Movie';

const SearchedMovies = ({query}) => {
    const {searchedMovies,fetchMoviesbyTitle,loading} = useContext(MoviesContext);
    useEffect(()=>{
        fetchMoviesbyTitle(query);
    },[query])
  return (
    <div className='movies-container'>
    {loading?<h2>Loading....</h2>:searchedMovies.map(movie=>{
        return <Movie key={movie.id} movie={movie}/>
    })}
    </div>
  )
}

export default SearchedMovies