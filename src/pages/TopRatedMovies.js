import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard';

const TopRatedMovies = () => {
    const [movies,setMovies] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const getTopRatedMovies = async() => {
            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/top_rated',
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
        getTopRatedMovies();
    },[])
    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h3>Top Rated Movies</h3>
            {movies.map(movie =>
                <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default TopRatedMovies