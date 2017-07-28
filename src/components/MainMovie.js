import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function MainMovie (props) {
  console.log(props);
  const { overview, poster, releaseDate, title } = props.movie

  if (props.isFetching) return <p>Loading</p>;

  return (
    <Jumbotron>
        <h3>Netflix</h3>
        <Button>Watch Now</Button>

        <h2>{title}</h2>
        <p>{releaseDate}</p>
        <p>{overview}</p>
        <img src={`http://image.tmdb.org/t/p/w150//${poster}`}
          alt={`Poster for ${title}`}/>

      </Jumbotron>
  );
}

export default MainMovie;
