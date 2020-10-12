import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          //console.log('data', response.data);

          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  console.log('movieList', movieList);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };


  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>

        {/*  one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component. */}
        <Route path={`/movies/:movieID`}>
          <Movie />
        </Route>

        {/* one route for `/` that loads the `MovieList` component. This component will need the movies injected into it via props. */}
        <Route path={'/'}>
          <MovieList movies={movieList} />
        </Route>

      </Switch>


    </div>
  );
}
