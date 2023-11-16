import {  MovieProvider } from './Context'
import Movies from './components/Movies';


function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Movies/>
      </div>
    </MovieProvider>
  );
}

export default App;
