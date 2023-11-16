import React from 'react'
import { AiFillStar ,AiOutlineStar } from "react-icons/ai";

const Movie = ({movie}) => {
    const handleBookmark = () => {
        console.log("handleBookmark is clicked.");
    }
  return (
    <div className='movie'>
        <button onClick={handleBookmark} className='bookmarkButton'><AiOutlineStar/></button>
        <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt='movie-poster'/>
        <h3>{movie.title}</h3>
    </div>
  )
}

export default Movie