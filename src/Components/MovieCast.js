import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import MovieCastCard from './MovieCastCard';

const MovieCast = ({ movieId }) => {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getMovieCast = async () => {
            setLoading(true);
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    }
                }
            )
            setCast(response.data.cast);
            setLoading(false);
        }
        getMovieCast();
    }, [movieId])

    if (loading) {
        return <h3>Loading ....</h3>
    }
    return (
        <div>
            <h3>Movie Cast</h3>
            {cast.map(castElem => { return castElem.profile_path && <MovieCastCard key={castElem.id} castElem={castElem} /> })}
        </div>
    )
}

export default MovieCast