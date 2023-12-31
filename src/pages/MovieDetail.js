import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../Context/MovieContext';
import MovieCast from '../Components/MovieCast';
import MovieExternalLinks from '../Components/MovieExternalLinks';
import MovieImages from '../Components/MovieImages';
import MovieRecommendation from '../Components/MovieRecommendation';
import MovieReview from '../Components/MovieReview';
import SimilarMovies from '../Components/SimilarMovies';
import MovieVideos from '../Components/MovieVideos';

const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const {  baseURL } = useContext(MovieContext);


    useEffect(() => {
        const getMovieDetailById = async () => {
            setLoading(true);
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    }
                }
            )
            setMovie(response.data);
            setLoading(false);
        }
        getMovieDetailById();
    }, [movieId])

    const convertMinToHours = (min) => {
        const hours =parseInt(min / 60);
        const minutes = min % 60;
        return `${hours}h ${minutes}m`
    }
    if (loading) {
        return <h3>Loading...</h3>
    }
    return (
        <div>
            <img src={`${baseURL}${movie.poster_path}`} alt="movie" />
            <p><a href={`${movie.homepage}`} target='_blank' rel="noreferrer">Title : {movie.title}</a></p>
            <p> Genres : {movie.genres.map(genreId => genreId.name + " ")}</p>
            {(movie.adult) ? <p>Adult Movie</p> : ""}
            <MovieReview movieId={movie.id}/>
            <MovieExternalLinks movieId={movie.id}/>
            <p>Status : {movie.status}</p>
            <p>Release Date : {movie.release_date}</p>
            <p>Runtime : {convertMinToHours(movie.runtime)}</p>
            <p>Tagline : {movie.tagline}</p>
            <p>Original Language : {movie.original_language}</p>
            <p>Overview : {movie.overview}</p>
            <p>Vote Average : {movie.vote_average}</p>
            <p>Vote Count : {movie.vote_count}</p>
            <h5>Production Companies : </h5>
            {movie.production_companies.map(prodComp => {
                return <div key={prodComp.id}>
                    {prodComp.logo_path&&<img src={`${baseURL}${prodComp.logo_path}`} alt='production Company' />}
                    <p> Production Company Name : {prodComp.name} </p>
                    <p> Country of Origin : {prodComp.origin_country}</p>
                </div>
            })}
            <p>Languages : {movie.spoken_languages.map(lang=>lang.name+" ")}</p>
            <MovieVideos movieId={movie.id}/>
            <MovieImages movieId={movie.id}/>
            <MovieCast movieId={movie.id}/>
            <MovieRecommendation movieId={movieId}/>
            <SimilarMovies movieId={movieId}/>
        </div>
    )
}

export default MovieDetail