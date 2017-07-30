import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDramas } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class DramasContainer extends Component {
  componentDidMount() {
    this.props.fetchDramas();
  }
  render() {
    return (
      <MovieGenre
        genre={"Dramas"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

function mapStateToProps (state) {
  return {
    error: state.dramas.error,
    isFetching: state.dramas.isFetching,
    movies: state.dramas.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchDramas}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DramasContainer);
