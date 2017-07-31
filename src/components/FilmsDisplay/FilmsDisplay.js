import React from 'react';
import { Link } from 'react-router-dom';
import './FilmsDisplay.scss';

function Movie (movie) {
  const { id, title, backdrop_path } = movie.movie;
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
  if (movies.isFetching) return <p style={{color: "white"}}>Loading</p>;

  if (!movies.movies[0]) {
    return <h3>Sorry. No results for {genreOrQuery}</h3>
  }

  return (
    <div className="genre">
      <h1>{genreOrQuery.toUpperCase()}</h1>
      {movies.movies.map(function(movie){
        return <Movie key={movie.id} movie={movie}/>
      })}
    </div>
  )
}

export default FilmsDisplay;
