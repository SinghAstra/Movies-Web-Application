import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const MovieRecommendation = ({movieId}) => {
    const [movies, setMovies] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getMoviesRecommendation = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
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
        getMoviesRecommendation();
    }, [])

    if(loading){
        return <div>Loading...</div>
    }
    if(movies.length===0){
        return ;
    }
    return (
        <div>
            <h3>Recommended Movies</h3>
            {movies.map(movie =>{
                return movie.backdrop_path&&<MovieCard key={movie.id} movie={movie} />
            })}
        </div>
    )
}

export default MovieRecommendation