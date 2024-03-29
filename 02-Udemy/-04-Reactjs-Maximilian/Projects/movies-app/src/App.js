import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovis] = useState([])

  function fetchMoviesHandler(){
    fetch("https://swapi.dev/api/films/").then(res=>{
      return res.json()
    }).then(data => {
      const transformedMovies = data.results.map(moviedata =>{
        return {
          id: moviedata.episode_id,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
          releaseDate: moviedata.release_date,
        };
      })
      setMovis(data.results)
    });
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
