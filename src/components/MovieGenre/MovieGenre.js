import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './MovieGenre.scss';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      useCSS: true,
      swipe: true,
      swipeToSlide: true
    }

    return (
      <div className="slider">
        <Slider {...settings}>
          {this.props.movies.map( (movie) => {
            if (!movie.backdrop_path) return null;
            return (
              <Link to={`/film/${movie.id}`} key={movie.id} className="img-box">
                {movie.poster_path
                  ? <img src={`http://image.tmdb.org/t/p/w300//${movie.poster_path}`}/>
                  : <p className="imgReplacement">{movie.title}</p>
                }

              </Link>
            )
          } )}
        </Slider>
      </div>
    )
  }
}

SimpleSlider.propTypes = {
  error: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired
}

function MovieGenre (props) {
  return (
    <div className="movieGenre contain">
      {props.isFetching
        ? <div className="spinner"></div>
        : <div className="contentBox">
            <Link to={`/genre/${props.genre}`}>
              <h4>{props.genre}</h4>
            </Link>
            <SimpleSlider {...props}/>
          </div>
      }
    </div>
  )
}

MovieGenre.propTypes = {
  error: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired
}

export default MovieGenre;
