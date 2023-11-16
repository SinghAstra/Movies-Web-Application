import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../Context';

const Genre = () => {
    const { genres, setActiveGenre, fetchGenre } = useContext(MoviesContext);
    useEffect(() => {
        fetchGenre();
    }, [])
    return (
        <div className='genre-container'>
            {genres.map(genre => {
                return <button onClick={() => setActiveGenre(genre.id)} key={genre.id} className='genre-button'>{genre.name}</button>
            })}
        </div>
    )
}

export default Genre