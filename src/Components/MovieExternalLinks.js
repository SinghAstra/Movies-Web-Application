import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MovieExternalLinks = ({movieId}) => {
    const [links,setLinks] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const getExternalLinks = async() => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}/external_ids`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    }
                }
            )
            setLinks(response.data);
            setLoading(false);
        }
        getExternalLinks();
    },[movieId])
    
    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <ul>
                <li>
                    <a href={`https://www.imdb.com/title/${links.imdb_id}`} target='_blank'  rel="noreferrer">IMDB</a>
                </li>
                <li>
                    <a href={`https://www.wikidata.org/wiki/${links.wikidata_id}`} target='_blank'  rel="noreferrer">Wikidata</a>
                </li>
                <li>
                    <a href={`https://www.facebook.com/${links.facebook_id}`} target='_blank'  rel="noreferrer">Facebook</a>
                </li>
                <li>
                    <a href={`https://www.instagram.com/${links.instagram_id}`} target='_blank'  rel="noreferrer">Instagram</a>
                </li>
                <li>
                    <a href={`https://twitter.com/${links.twitter_id}`} target='_blank' rel="noreferrer">Twitter</a>
                </li>
            </ul>
        </div>
    )
}


export default MovieExternalLinks