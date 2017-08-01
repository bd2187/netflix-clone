import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import './SingleFilm.scss';
import { zeroCheck, convertDate } from './helpers';

function TrailersDisplay (props) {
  const { isFetching, error, trailersArr } = props.trailers;
  if (isFetching) return <div className="spinner"></div>;

  return (
    <div className="trailersDisplay">
      {trailersArr.map(function(video){
        if (!video) { return null; }
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

function SingleFilm ({isFetching, error, film, trailers, history}) {
  // console.log(history.goBack())
  return (
    <div className="singleFilm contain">
      {isFetching
        ? <div className="spinner"></div>
        : <div>
            <div className="mainContent">
              <img
                className="imgSpread" src={`http://image.tmdb.org/t/p/w1000//${film.backdrop_path}`}
                alt={`Poster for ${film.title}`}/>
              <div className="movieInfo">
                <h1>{film.title}</h1>
                { film.runtime !== 0
                  ? <button id="play">
                    <i className="fa fa-play" aria-hidden="true"></i>
                    Play
                  </button>
                  : null
                }                
                <p className="description">{film.overview}</p>
                { film.runtime !== 0 ? <p>{`${film.runtime} min.`}</p> : null }
                <p>Release Date: {convertDate(film.release_date)}</p>
              </div>
            </div>
            <TrailersDisplay trailers={trailers}/>
            <button id="backBtn" onClick={history.goBack}>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
              Go back
            </button>
          </div>
      }
    </div>
  )
}

export default SingleFilm;
