import React, { useContext, useEffect, useState } from 'react'
import Movie from './components/Movie';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MoviesContext } from './Context';

const ScrollMovies = () => {
    const { movies, setMovies, totalPage, loading, activeGenre, page, setPage, fetchMoviesbyGenre } = useContext(MoviesContext);

    useEffect(() => {
        fetchMoviesbyGenre();
    }, [page]);

    return (
        <InfiniteScroll
                dataLength={movies.length}
                next={() => setPage(page + 1)}
                hasMore={page < totalPage}
                loader={<h4>Loading...</h4>}
                scrollThreshold={0.8}
                style={{ overflow: 'hidden' }}
            >
        <div className='movies-container'>
                {movies.map(movie => {
                    return <Movie movie={movie} key={movie.id} />
                })}
        </div>
            </InfiniteScroll>
    )
}

export default ScrollMovies