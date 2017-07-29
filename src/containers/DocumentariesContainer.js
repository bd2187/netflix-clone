import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovieByGenre } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class DocumentariesContainer extends Component {
  componentDidMount() {
    this.props.fetchMovieByGenre(99);
  }
  render() {
    return (
      <MovieGenre
        genre={"Documentaries"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

function mapStateToProps (state) {
  return {
    error: state.documentaries.error,
    isFetching: state.documentaries.isFetching,
    movies: state.documentaries.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchMovieByGenre}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentariesContainer);
