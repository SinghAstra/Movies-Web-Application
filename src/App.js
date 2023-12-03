import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MoviesInTheatres from './Pages/MoviesInTheatres';
import MovieDetail from './Pages/MovieDetail';
import { MovieProvider } from './Context/MovieContext';
import PopularMovies from './Pages/PopularMovies';
import TopRatedMovies from './Pages/TopRatedMovies';
import UpcomingMovies from './Pages/UpcomingMovies';



function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies-in-theatres' element={<MoviesInTheatres/>}/>
          <Route path='/popular-movies' element={<PopularMovies/>}/>
          <Route path='/top-rated-movies' element={<TopRatedMovies/>}/>
          <Route path='/upcoming-movies' element={<UpcomingMovies/>}/>
          <Route path='/movie/:movieId' element={<MovieDetail/>}/>
        </Routes>
      </div>
    </MovieProvider>
 );
}

export default App;
