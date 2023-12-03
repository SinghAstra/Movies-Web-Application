import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MovieContext } from '../Context/MovieContext';

const MovieCard = ({ movie }) => {
    const {baseURL,genreMapping} = useContext(MovieContext);
    return (
        <div className='movie-container'>
            <Link to={`/movie/${movie.id}`}>
                <img src={`${baseURL}${movie.backdrop_path}`} alt="movie" />
                <p>Title : {movie.original_title}</p>
                <p> Genres : {movie.genre_ids.map(genreId => {
                    return genreMapping[genreId] + " "
                })}</p>
            </Link>
        </div>
    )
}

export default MovieCard