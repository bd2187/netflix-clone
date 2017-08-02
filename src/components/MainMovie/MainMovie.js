import React from 'react';
import PropTypes from 'prop-types';
import './MainMovie.scss';

function MainMovie (props) {
  const { overview, poster, releaseDate, title } = props.movie;

   const imageUrl = `http://image.tmdb.org/t/p/w1000//${poster}`;

   var backgroundImg = {
     background: `linear-gradient(180deg, #141414, transparent 50%),
                  linear-gradient(0deg, #141414, transparent 100%),
                  url(${imageUrl}) no-repeat center/cover`
   };

   if (props.error) {
     return <h3 className="dataFetchingError">{`Error fetching top movie`}</h3>
   }

  return (
    <div className="mainMovie contain" style={poster ? backgroundImg : null}>
        {props.isFetching
          ? <div className="spinner"></div>
          : <div className="contentBox">
              <div className="mainMovieInfo">
                <h1>{title}</h1>
                <p>{overview}</p>
              </div>
              <button>
                <i className="fa fa-play" aria-hidden="true"></i>
                Play
              </button>
            </div>
        }
      </div>
  );
}

MainMovie.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movie: PropTypes.object.isRequired
}

export default MainMovie;
