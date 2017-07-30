import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import './SingleFilm.scss';

function TrailersDisplay (props) {
  const { isFetching, error, trailersArr } = props.trailers;

  if (isFetching) return <p>Loading</p>;

  return (
    <div className="trailersDisplay">
    {trailersArr.map(function(video){
      return  <iframe
                key={video.id}
                width="420" height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                allowFullScreen="allowFullScreen"
              >
              </iframe>
    })}
    </div>
  )
}

function SingleFilm ({isFetching, error, film, trailers}) {
  console.log(trailers);
  if (isFetching) return <p>Loading</p>;
  return (
    <div className="singleFilm">
      <img
        className="imgSpread" src={`http://image.tmdb.org/t/p/w1000//${film.backdrop_path}`}
        alt={`Poster for ${film.title}`}/>
      <h1>{film.title}</h1>
      <button>
        <i className="fa fa-play" aria-hidden="true"></i>
        Play
      </button>
      <p className="description">{film.overview}</p>
      <p>{`${film.runtime} min.`}</p>
      <p>{film.release_date}</p>
      <TrailersDisplay trailers={trailers}/>
    </div>
  )
}

export default SingleFilm;
