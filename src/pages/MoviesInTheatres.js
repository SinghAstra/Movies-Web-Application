import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard';
import { MovieContext } from '../Context/MovieContext';

const MoviesInTheatres = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const {genreMapping} = useContext(MovieContext);
    

    useEffect(() => {
        const fetchMoviesInTheatres = async () => {
            setLoading(true);
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing',
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    }
                }
            )
            setMovies(response.data);
            setLoading(false);
        }
        fetchMoviesInTheatres();
    }, [])

    if (loading) {
        return <h3>Loading ....</h3>
    }
    return (
        <div>
            <h3>Movies in Theatres</h3>
            <p>Minimum Date : {movies.dates.minimum}</p>
            <p>Maximum Date : {movies.dates.maximum}</p>
            {movies.results.map(movie =>
                <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default MoviesInTheatres