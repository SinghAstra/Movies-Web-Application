import React from 'react'
import SearchBar from '../components/SearchBar'
import Movies from '../components/Movies'
import { useParams } from 'react-router-dom';

const Home = () => {
    const { query } = useParams();
    console.log("query is ", query);
    return (
        <div>
            <SearchBar />
            <Movies />
        </div>
    )
}

export default Home