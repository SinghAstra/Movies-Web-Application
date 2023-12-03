import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../Context/MovieContext';
import axios from 'axios';

const MovieImages = ({movieId}) => {
    const [images,setImages] = useState();
    const [loading,setLoading] = useState(true);
    const {baseURL} = useContext(MovieContext);

    useEffect(()=>{
        const getMovieImages = async() => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}/images`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    }
                }
            )
            console.log("response.data.backdrops is ",response.data.backdrops);
            setImages(response.data.backdrops);
            setLoading(false);
        }
        getMovieImages();
    },[])
    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            {images.map(image =>
                <img src={`${baseURL}${image.file_path}`} alt='movie'/>)}
        </div>
    )
}

export default MovieImages