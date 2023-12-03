import React, { useEffect, useState } from 'react'
import MovieReviewCard from './MovieReviewCard';
import axios from 'axios';

const MovieReview = ({movieId}) => {
    const [movieReviews, setMovieReviews] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getMovieReviews = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    }
                }
            )
            setMovieReviews(response.data.results);
            setLoading(false);
        }
        getMovieReviews();
    }, [movieId])

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h3>Movie Reviews</h3>
            {movieReviews.map(review =>
            {
                return review.author_details.avatar_path&&<MovieReviewCard key={review.id} review={review} />
            })}
        </div>
    )
}

export default MovieReview