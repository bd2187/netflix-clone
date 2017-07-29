import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      useCSS: true,
      swipe: true,
      swipeToSlide: true
    }
    // console.log(this.props);

    return (
      <div className="slider">
        <Slider {...settings}>
          {this.props.movies.map( (movie) => {
            return (
              <div key={movie.id} className="img-box">
                <img src={`http://image.tmdb.org/t/p/w150//${movie.poster_path}`}/>
              </div>
            )
          } )}
        </Slider>
      </div>
    )
  }
}

function MovieGenre (props) {
  if (props.isFetching) return <p>Loading</p>;
  // console.log(props);
  return (
    <div className="movieGenre">
      <h4>{props.genre}</h4>
      <SimpleSlider {...props}/>
    </div>
  )
}

export default MovieGenre;
