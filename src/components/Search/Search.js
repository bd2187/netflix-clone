import React from 'react';
import FilmsDisplay from '../FilmsDisplay/FilmsDisplay';

function Search ({movies}) {
  return <FilmsDisplay movies={movies} genreOrQuery={movies.query} />
}

export default Search;
