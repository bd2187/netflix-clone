import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrending } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class TrendingContainer extends Component {
  componentDidMount() {
    this.props.fetchTrending();
  }
  render() {
    return (
      <MovieGenre
        genre={"Trending Now"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

function mapStateToProps (state) {
  return {
    error: state.trending.error,
    isFetching: state.trending.isFetching,
    movies: state.trending.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchTrending}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingContainer);
