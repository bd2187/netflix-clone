import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveEmbed } from 'react-bootstrap';
import './SingleFilm.scss';
import { zeroCheck, convertDate } from './helpers';

function TrailersDisplay(props) {
  const { isFetching, error, trailersArr } = props.trailers;
  if (error)
    return (
      <h3 className="dataFetchingError">
        {error}
      </h3>
    );
  if (isFetching) return <div className="spinner" />;

  return (
    <div className="trailersDisplay">
      {trailersArr.map(function(video) {
        if (!video) {
          return null;
        }
        return (
          <iframe
            key={video.id}
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            allowFullScreen="allowFullScreen"
          />
        );
      })}
    </div>
  );
}

function SingleFilm({ isFetching, error, film, trailers, history }) {
  if (error)
    return (
      <h3 className="dataFetchingError">
        {error}
      </h3>
    );
  return (
    <div className="singleFilm contain">
      {isFetching
        ? <div className="spinner" />
        : <div>
            <div className="mainContent">
              <img
                className="imgSpread"
                src={`https://image.tmdb.org/t/p/w1000//${film.backdrop_path}`}
                alt={`Poster for ${film.title}`}
              />
              <div className="movieInfo">
                <h1>
                  {film.title}
                </h1>
                {film.runtime !== 0
                  ? <button id="play">
                      <i className="fa fa-play" aria-hidden="true" />
                      Play
                    </button>
                  : null}
                <p className="description">
                  {film.overview}
                </p>
                {film.runtime !== 0 ? <p>{`${film.runtime} min.`}</p> : null}
                <p>
                  Release Date: {convertDate(film.release_date)}
                </p>
              </div>
            </div>
            <TrailersDisplay trailers={trailers} />
            <button id="backBtn" onClick={history.goBack}>
              <i className="fa fa-angle-double-left" aria-hidden="true" />
              Go back
            </button>
          </div>}
    </div>
  );
}

SingleFilm.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
  trailers: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    trailersArr: PropTypes.array.isRequired
  })
};

export default SingleFilm;
