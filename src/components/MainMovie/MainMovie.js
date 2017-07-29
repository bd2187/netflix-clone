import React from 'react';
import './MainMovie.scss';

function MainMovie (props) {
  // console.log(props);
  const { overview, poster, releaseDate, title } = props.movie

  if (props.isFetching) return <p>Loading</p>;

   const imageUrl = `http://image.tmdb.org/t/p/w1000//${poster}`;

   var backgroundImg = {
     background: `linear-gradient(0deg, #141414, transparent 100%),
                  url(${imageUrl}) no-repeat center/cover`
   };

  return (
    <div className="mainMovie"
          style={backgroundImg}>
        <h3>Netflix</h3>
          <div className="mainMovieInfo">
            <h2>{title}</h2>
            <p>{overview}</p>
          </div>
        <button>Watch Now</button>
      </div>
  );
}

export default MainMovie;
