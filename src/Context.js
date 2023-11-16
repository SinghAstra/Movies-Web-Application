import { createContext, useState } from "react";

export const MoviesContext = createContext();
export function MovieProvider(props){
    const [movies,setMovies] = useState([]);
    const [activeGenre,setActiveGenre] = useState(28);
    const fetchMoviesbyGenre = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=${process.env.REACT_APP_API_KEY}&with_origin_country=IN&page=${1}`
        );
        const filteredMoviesbyGenre = await data.json();
        console.log("filteredMoviesbyGenre is ",filteredMoviesbyGenre);
        setMovies(filteredMoviesbyGenre.results); 
      };
    return <MoviesContext.Provider value={{
        movies,
        activeGenre,
        setActiveGenre,
        fetchMoviesbyGenre
        }}>
        {props.children}
    </MoviesContext.Provider>
}

