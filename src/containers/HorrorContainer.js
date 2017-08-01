import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHorror } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class HorrorContainer extends Component {
  componentDidMount() {
    this.props.fetchHorror();
  }
  render() {
    return (
      <MovieGenre
        genre={"Horror"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

HorrorContainer.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  fetchHorror: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    error: state.horror.error,
    isFetching: state.horror.isFetching,
    movies: state.horror.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchHorror}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorrorContainer);
