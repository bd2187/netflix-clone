import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FilmsDisplay from '../FilmsDisplay/FilmsDisplay';

function Genre ({ movies, genre }) {
  return <FilmsDisplay movies={movies} genreOrQuery={genre}/>
}

Genre.propTypes = {
  movies: PropTypes.shape({
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired
  }).isRequired,
  genre: PropTypes.string.isRequired
}

export default Genre;
