import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import './SingleFilm.scss';

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

const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'Septemeber',
  '10': 'October',
  '11': 'November',
  '12': 'December',
}

function convertDate(date) {
  const dateArr = date.split('-');
  const month = months[dateArr[1]];
  return `${month} ${dateArr[2]}, ${dateArr[0]}`;
}

function SingleFilm ({isFetching, error, film, trailers}) {
  if (isFetching) return <p>Loading</p>;
  return (
    <div className="singleFilm">
      {isFetching
        ? <div className="spinner"></div>
        : <div>
            {film.backdrop_path &&
              <img
                className="imgSpread" src={`http://image.tmdb.org/t/p/w1000//${film.backdrop_path}`}
                alt={`Poster for ${film.title}`}/>
            }
            <h1>{film.title}</h1>
            <button>
              <i className="fa fa-play" aria-hidden="true"></i>
              Play
            </button>
            <p className="description">{film.overview}</p>
            <p>{`${film.runtime} min.`}</p>
            <p>Release Date: {convertDate(film.release_date)}</p>
            <TrailersDisplay trailers={trailers}/>
          </div>
      }
    </div>
  )
}

export default SingleFilm;
