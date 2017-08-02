import React from 'react';
import PropTypes from 'prop-types';
import FilmsDisplay from '../FilmsDisplay/FilmsDisplay';

function Search ({movies}) {
  return <FilmsDisplay movies={movies} genreOrQuery={movies.query} />
}

Search.propTypes = {
  movies: PropTypes.shape({
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired
  }).isRequired
}

export default Search;
