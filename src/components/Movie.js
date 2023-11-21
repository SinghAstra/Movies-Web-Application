import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';


const Movie = ({ movie }) => {
  const handleBookmark = () => {
    console.log("handleBookmark is clicked.");
  }

  return (
    <Link to={`/movies/${movie.id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
        layout
        className='movie'
      >
        <button onClick={handleBookmark} className='bookmarkButton'><AiOutlineStar /></button>
        <img src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path} alt='movie-poster' />
        <div className='movie-info'>
          <h5 className='movie-title'>{movie?.title || movie.name}</h5>
          {(movie.vote_average || 0) > 7 ? <h5 className='text-green movie-rating'>{(movie.vote_average || 0).toFixed(1)}</h5> : (movie.vote_average || 0) > 5.5 ? <h5 className='text-orange movie-rating'>{(movie.vote_average || 0).toFixed(1)}</h5> : <h5 className='text-red movie-rating'>{(movie.vote_average || 0).toFixed(1)}</h5>}
        </div>
      </motion.div>
    </Link>

  )
}

export default Movie