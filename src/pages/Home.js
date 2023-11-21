import React from 'react'
import SearchBar from '../components/SearchBar'
import Movies from '../components/Movies'
import { useParams } from 'react-router-dom';
import SearchedMovies from '../components/SearchedMovies';

const Home = () => {
    const { query } = useParams();
    return (
        <div>
            <SearchBar />
            {query?<SearchedMovies query={query}/>:<Movies/>}
        </div>
    )
}

export default Home