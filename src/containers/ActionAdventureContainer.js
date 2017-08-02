import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchActionAdventure } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class ActionAdventureContainer extends Component {
  componentDidMount() {
    this.props.fetchActionAdventure();
  }
  render() {
    return (
      <MovieGenre
        genre={"Action & Adventure"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

ActionAdventureContainer.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  fetchActionAdventure: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    error: state.actionAdventure.error,
    isFetching: state.actionAdventure.isFetching,
    movies: state.actionAdventure.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchActionAdventure}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionAdventureContainer);
