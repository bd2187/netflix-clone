import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDocumentaries } from '../actions';
import MovieGenre from '../components/MovieGenre/MovieGenre';

class DocumentariesContainer extends Component {
  componentDidMount() {
    this.props.fetchDocumentaries();
  }
  render() {
    return (
      <MovieGenre
        genre={"Documentaries"}
        isFetching = {this.props.isFetching}
        error = {this.props.error}
        movies = {this.props.movies}/>
    );
  }
}

DocumentariesContainer.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  fetchDocumentaries: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    error: state.documentaries.error,
    isFetching: state.documentaries.isFetching,
    movies: state.documentaries.movies
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchDocumentaries}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentariesContainer);
