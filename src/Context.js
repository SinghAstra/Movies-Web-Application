import { createContext, useState } from "react";

export const MoviesContext = createContext();

export function MovieProvider(props) {

  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(28);
  const [genres,setGenres] = useState([]);
  const [loading,setLoading] = useState(true);


  const fetchMoviesbyGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=${process.env.REACT_APP_API_KEY}&with_origin_country=IN&page=${1}`
    );
    const filteredMoviesbyGenre = await data.json();
    setLoading(false);
    setMovies(filteredMoviesbyGenre.results);
  };

  const fetchGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&with_origin_country=IN&language=en-US`
    );
    const gen = await data.json();
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
    loading,
    setLoading,
    fetchMoviesbyGenre
  }}>
    {props.children}
  </MoviesContext.Provider>
}

