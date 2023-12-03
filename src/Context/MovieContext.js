import axios from "axios";
import React, { useEffect, useState } from "react";

export const MovieContext = React.createContext();

export function MovieProvider(props){
    const [genreMapping, setGenreMapping] = useState({});
    const baseURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(()=>{
        const handleGenreMapping = async () => {
            const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list',
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    }
                }
            )
            const genreArray = response.data.genres;
            const genreMappingObject = genreArray.reduce((acc, currentObj) => {
                acc[currentObj.id] = currentObj.name;
                return acc;
            }, {});
            setGenreMapping(genreMappingObject);
        }
        handleGenreMapping();
    },[])
    

    return <MovieContext.Provider value={{
        genreMapping,
        baseURL
        }}>
        {props.children}
    </MovieContext.Provider>
}