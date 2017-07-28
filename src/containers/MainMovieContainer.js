import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMainMovie } from '../actions';
import MainMovie from '../components/MainMovie';


class MainMovieContainer extends Component {
  componentDidMount() {
    this.props.fetchMainMovie();
  }
  render() {
    return <MainMovie {...this.props}/>
  }
}

MainMovieContainer.propTypes = {
  fetchMainMovie: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    error: state.mainMovie.error,
    isFetching: state.mainMovie.isFetching,
    movie: state.mainMovie.movie
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchMainMovie}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMovieContainer);
