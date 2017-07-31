import React from 'react';
import './MainMovie.scss';

function MainMovie (props) {
  console.log(props);
  const { overview, poster, releaseDate, title } = props.movie

  // if (props.isFetching) return <p>Loading</p>;

   const imageUrl = `http://image.tmdb.org/t/p/w1000//${poster}`;

   var backgroundImg = {
     background: `linear-gradient(0deg, #141414, transparent 100%),
                  url(${imageUrl}) no-repeat center/cover`
   };

  return (
    <div className="mainMovie" style={poster ? backgroundImg : null}>
        {props.isFetching
          ? <div className="spinner"></div>
          : <div>
              <div className="mainMovieInfo">
                <h2>{title}</h2>
                <p>{overview}</p>
              </div>
              <button>Watch Now</button>
            </div>
        }
      </div>
  );
}

export default MainMovie;
