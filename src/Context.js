import { createContext, useState } from "react";

export const MoviesContext = createContext();

export function MovieProvider(props) {

  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(28);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [page,setPage] = useState(1);
  const [totalPage,setTotalPage] = useState(null);


  const fetchMoviesbyGenre = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=${process.env.REACT_APP_API_KEY}&with_origin_country=US&page=${page}`
    );
    console.log("movies is ",movies);
    const filteredMoviesbyGenre = await data.json();
    setTotalPage(filteredMoviesbyGenre.total_pages);
    setMovies(movies.concat(filteredMoviesbyGenre.results));
    setLoading(false);
  };

  const fetchGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&with_origin_country=US&language=en-US`
    );
    const gen = await data.json();
    setGenres(gen.genres);
  }

  const fetchMoviesbyTitle = async (query) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&with_origin_country=US&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const searchmovies = await data.json();
    console.log("searchmovies is ",searchmovies);
    setLoading(false);
    setSearchedMovies(searchmovies.results);
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
    fetchMoviesbyGenre,
    searchedMovies,
    fetchMoviesbyTitle,
    page,
    setPage,
    totalPage
  }}>
    {props.children}
  </MoviesContext.Provider>
}

