import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchThriller } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class ThrillerContainer extends Component {
  componentDidMount() {
    this.props.fetchThriller();
  }
  render() {
    return (
      <MovieGenre
        genre={"Thrillers"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

ThrillerContainer.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  fetchThriller: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    error: state.thriller.error,
    isFetching: state.thriller.isFetching,
    movies: state.thriller.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchThriller}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThrillerContainer);
