import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../Context'
import Movie from './Movie';
import Genre from './Genre';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
  const { movies,setMovies,totalPage, loading, activeGenre,page,setPage, fetchMoviesbyGenre } = useContext(MoviesContext);

  useEffect(()=>{
    fetchMoviesbyGenre();
  },[activeGenre])

  useEffect(()=>{
    fetchMoviesbyGenre();
  },[page])

  console.log("page is ",page);
  console.log("totalPage is ",totalPage);
  return (
    <>
      <Genre />
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={()=>setPage(page+1)}
        hasMore={page<totalPage}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.8}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ overflow: 'hidden' }}
      >
        <div className='movies-container'>
          {loading ? <h1>Loading...</h1> : movies.map(movie => {
            return <Movie movie={movie} key={movie.id} />
          })}
        </div>
      </InfiniteScroll>
    </>
  )
}

export default Movies