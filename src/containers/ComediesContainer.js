import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComedies } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class ComediesContainer extends Component {
  componentDidMount() {
    this.props.fetchComedies(35);
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
