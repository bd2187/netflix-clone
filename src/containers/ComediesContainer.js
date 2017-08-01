import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComedies } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class ComediesContainer extends Component {
  componentDidMount() {
    this.props.fetchComedies();
  }
  render() {
    return (
      <MovieGenre
        genre={"Comedies"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

ComediesContainer.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  fetchComedies: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    error: state.comedies.error,
    isFetching: state.comedies.isFetching,
    movies: state.comedies.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchComedies}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComediesContainer);
