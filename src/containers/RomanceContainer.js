import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRomance } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class RomanceContainer extends Component {
  componentDidMount() {
    this.props.fetchRomance();
  }
  render() {
    return (
      <MovieGenre
        genre={"Romance"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

RomanceContainer.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  fetchRomance: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    error: state.romance.error,
    isFetching: state.romance.isFetching,
    movies: state.romance.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchRomance}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RomanceContainer);
