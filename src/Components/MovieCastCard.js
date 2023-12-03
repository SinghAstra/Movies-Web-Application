import React, { useContext } from 'react'
import {MovieContext} from '../Context/MovieContext'

const MovieCastCard = ({castElem}) => {
    const { baseURL } = useContext(MovieContext);

    return (
        <div className='cast-container'>
            <img src={`${baseURL}${castElem.profile_path}`} alt='cast' />
            <p>Charcter : {castElem.character}</p>
            <p>Name : {castElem.name}</p>
        </div>
    )
}

export default MovieCastCard