import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchScifi } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class ScifiContainer extends Component {
  componentDidMount() {
    this.props.fetchScifi();
  }
  render() {
    return (
      <MovieGenre
        genre={"Sci-Fi"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

function mapStateToProps (state) {
  return {
    error: state.scifi.error,
    isFetching: state.scifi.isFetching,
    movies: state.scifi.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchScifi}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScifiContainer);
