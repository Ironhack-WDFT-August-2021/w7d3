import './App.css';
import { useState } from 'react';
import MoviesList from './MoviesList';
import { v4 as uuid } from 'uuid';

const moviesData = [
  {
    "_id": "1ae23ef1",
    "title": "The Godfather",
    "director": "Francis Coppola",
    "hasOscars": true,
    "IMDBRating": 9.2
  },
  {
    "_id": "1ae23ef2",
    "title": "Star Wars",
    "director": "George Lucas",
    "hasOscars": true,
    "IMDBRating": 8.7
  },
  {
    "_id": "1ae23ef3",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "hasOscars": false,
    "IMDBRating": 9.3
  },
  {
    "_id": "1ae23ef4",
    "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "hasOscars": false,
    "IMDBRating": 8.0
  },
  {
    "_id": "1ae23ef5",
    "title": "Sharknado",
    "director": "Anthony C. Ferrante",
    "hasOscars": false,
    "IMDBRating": 5.2
  },
  {
    "_id": "1ae23ef6",
    "title": "Titanic",
    "director": "James Cameron",
    "hasOscars": true,
    "IMDBRating": 8.9
  }
]

function App() {

  const [movies, setMovies] = useState(moviesData);
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [hasOscars, setHasOscars] = useState(true);
  const [IMDBRating, setIMDBRating] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(title, director, hasOscars, IMDBRating);
    const newMovie = { title, director, hasOscars, IMDBRating, _id: uuid() };
    console.log(newMovie);
    setMovies([newMovie, ...movies])
  }

  const handleTitleChange = event => {
    // console.log(event.target.value)
    setTitle(event.target.value)
  }

  const handleDirectorChange = event => {
    setDirector(event.target.value)
  }

  const handleHasOscarsChange = event => {
    setHasOscars(event.target.checked)
  }

  const handleIMDBRatingChange = event => {
    setIMDBRating(event.target.value)
  }

  return (
    <div className="App">
      <h1>Movies 🍿 🎬</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" value={title} onChange={handleTitleChange} />

        <label htmlFor="director">Director: </label>
        <input type="text" name="director" id="director" value={director} onChange={handleDirectorChange} />

        <label htmlFor="hasOscars">Oscars: </label>
        <input type="checkbox" name="hasOscars" id="hasOscars" checked={hasOscars} onChange={handleHasOscarsChange} />

        <label htmlFor="IMDBRating">Oscars: </label>
        <input type="number" name="IMDBRating" id="IMDBRating" value={IMDBRating} onChange={handleIMDBRatingChange} />

        <button type="submit">Add this movie to the list ＋</button>
      </form>

      {/* {moviesList} */}
      {/* you should not use index as key  🚨*/}
      {/* {movies.map((movie, i) => (<li key={i}>{movie.title}</li>))} */}

      {/*let's move this logic to it's own component  */}
      {/* {movies.map(movie => (<li key={movie._id}>{movie.title}</li>))} */}

      <MoviesList list={movies} />

    </div >
  );
}

export default App;
