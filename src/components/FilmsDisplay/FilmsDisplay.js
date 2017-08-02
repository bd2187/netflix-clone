import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FilmsDisplay.scss';

function Movie (movie) {
  const { id, title, backdrop_path } = movie.movie;
  if (movie.error) return <p className="dataFetchingError">Error fetching movie</p>;
  return (
    <Link to={`/film/${id}`}>
      <div className="imgContainer">
        {backdrop_path === null
          ? <h3>{title}</h3>
          : <div>
              <img
                src={`http://image.tmdb.org/t/p/w300//${backdrop_path}`}
                alt={`Poster for ${title}`}/>
              <div className="overlay">
                <p>{title}</p>
              </div>
            </div>
        }
      </div>
    </Link>
  )
}

function FilmsDisplay ({ movies, genreOrQuery }) {
  if (movies.isFetching) {
    return <div className="spinner"></div>
  }

  if (!movies.movies[0]) {
    return <h3>Sorry. No results for {genreOrQuery}</h3>
  }

  return (
    <div className="genre contain">
      <h1>{genreOrQuery.toUpperCase()}</h1>
      <div className="movieCollection">
        {movies.movies.map(function(movie){
          if (!movie.backdrop_path) return null;
          return <Movie key={movie.id} movie={movie}/>
        })}
      </div>
    </div>
  )
}

FilmsDisplay.propTypes = {
  movies: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired
  }).isRequired,
  genreOrQuery: PropTypes.string.isRequired
}

export default FilmsDisplay;
