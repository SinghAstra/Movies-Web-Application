import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const SimilarMovies = ({movieId}) => {
    const [movies, setMovies] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getSimilarMovies = async () => {
            setLoading(true);
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}/similar`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    }
                }
            )
            setMovies(response.data.results);
            setLoading(false);
        }
        getSimilarMovies();
    }, [movieId])

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h3>Similar Movies</h3>
            {movies.map(movie =>
                <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default SimilarMovies