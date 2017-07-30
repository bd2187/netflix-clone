import React from 'react';

function Search ({isFetching, error, query, movies}) {
  return (
    <div>
      <h1>Search</h1>
      <ul>
        {movies.map(function(movie){
          return (
            <li key={movie.id}>{movie.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Search;
