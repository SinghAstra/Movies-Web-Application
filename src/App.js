import { Route, Routes } from 'react-router-dom';
import {  MovieProvider } from './Context'
import Home from './pages/Home';



function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search/:query' element={<Home/>}/>
        </Routes>
      </div>
    </MovieProvider>
  );
}

export default App;
