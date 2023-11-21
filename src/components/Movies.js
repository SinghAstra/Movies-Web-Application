import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../Context'
import Movie from './Movie';
import Genre from './Genre';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion, AnimatePresence } from 'framer-motion';

const Movies = () => {
  const { movies, setMovies, totalPage, loading, activeGenre, page, setPage, fetchMoviesbyGenre } = useContext(MoviesContext);

    useEffect(() => {
      setPage(1) 
  }, []);

  useEffect(() => {
    setMovies([]);
    setPage(0);
  }, [activeGenre]);

  useEffect(() => {
    if(page>0){
      fetchMoviesbyGenre();
    }
  }, [page])

  return (
    <>
      <Genre />
      <motion.div
        layout
      >
        <AnimatePresence>
          <InfiniteScroll
            dataLength={movies.length} //This is important field to render the next data
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
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Movies