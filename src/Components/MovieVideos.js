import React, { useEffect, useState } from 'react'
import axios from 'axios';
import YoutubeVideo from './YoutubeVideo';

const MovieVideos = ({movieId}) => {
    const [videos, setVideos] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getMovieVideos = async () => {
            setLoading(true);
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    }
                }
            )
            setVideos(response.data.results);
            setLoading(false);
        }
        getMovieVideos();
    }, [movieId])

    if(loading){
        return <div>Loading...</div>
    }
    if(videos.length===0){
        return ;
    }

    return (
        <div>
            <h3>Movie Videos</h3>
            {videos.map(video =>
                video.site === 'YouTube'&&<YoutubeVideo key={video.id} video={video} />)}
        </div>
    )
}

export default MovieVideos