import React, { useContext } from 'react'
import { MovieContext } from '../Context/MovieContext'

const MovieReviewCard = ({review}) => {
    const {baseURL} = useContext(MovieContext)
  return (
    <a href={review.url} target='_blank' rel="noreferrer">
        <img src={`${baseURL}${review.author_details.avatar_path}`} alt='user'/>
        {review.author_details.rating&&<p>Rating : {review.author_details.rating}</p>}
        <p>Author : {review.author}</p>
        <p>Content : {review.content}</p>
    </a>
  )
}

export default MovieReviewCard