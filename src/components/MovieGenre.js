import React from 'react';
import PropTypes from 'prop-types';

function Movie (props) {
  return (
    <li>
      <h5>{props.title}</h5>
      <img src={`http://image.tmdb.org/t/p/w150//${props.poster}`}/>
    </li>
  )
}

function MovieGenre (props) {
  if (props.isFetching) return <p>Loading</p>;
  return (
    <div>
      <h4>{props.genre}</h4>
      <ul>
        {props.movies.map(function(movie){
          return <Movie
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}/>
        })}
      </ul>
    </div>
  )
}

export default MovieGenre;
