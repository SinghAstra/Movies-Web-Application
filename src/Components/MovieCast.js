import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../Context/MovieContext';

const MovieCast = ({movieId}) => {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const {baseURL} = useContext(MovieContext);

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
            console.log("response.data is ",response.data);
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
            {cast.map(castElem =>
               { return <div key={castElem.id} className='cast-container'>
               {(castElem.profile_path)? <img src={`${baseURL}${castElem.profile_path}`} alt='cast'/>:""}
                <p>Charcter : {castElem.character}</p>
                <p>Name : {castElem.name}</p>
               </div>} )}
        </div>
    )
}

export default MovieCast