import React from 'react';
import { Link } from 'react-router-dom';
import FilmsDisplay from '../FilmsDisplay/FilmsDisplay';

function Genre ({ movies, genre }) {
  return <FilmsDisplay movies={movies} genreOrQuery={genre}/>
}

export default Genre;
