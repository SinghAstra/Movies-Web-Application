import { createContext, useState } from "react";

export const MoviesContext = createContext();

export function MovieProvider(props) {

  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(28);
  const [genres,setGenres] = useState([]);


  const fetchMoviesbyGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=${process.env.REACT_APP_API_KEY}&with_origin_country=IN&page=${1}`
    );
    const filteredMoviesbyGenre = await data.json();
    console.log("filteredMoviesbyGenre is ", filteredMoviesbyGenre);
    setMovies(filteredMoviesbyGenre.results);
  };

  const fetchGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&with_origin_country=IN&language=en-US`
    );
    const gen = await data.json();
    console.log("genres is ",gen.genres);
    setGenres(gen.genres);
  }

  return <MoviesContext.Provider value={{
    movies,
    setMovies,
    activeGenre,
    setActiveGenre,
    genres,
    setGenres,
    fetchGenre,
    fetchMoviesbyGenre
  }}>
    {props.children}
  </MoviesContext.Provider>
}

