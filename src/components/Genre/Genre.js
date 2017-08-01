import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FilmsDisplay from '../FilmsDisplay/FilmsDisplay';

function Genre ({ movies, genre }) {
  console.log(movies)
  return <FilmsDisplay movies={movies} genreOrQuery={genre}/>
}

// Genre.propTypes = {
//   movies: PropTypes.shape({
//
//   })
// }

export default Genre;
