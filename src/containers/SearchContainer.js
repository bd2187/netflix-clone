import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFilm } from '../actions';
import Search from '../components/Search/Search';


class SearchContainer extends Component {
  componentDidMount() {
    const query = this.props.match.params.search;
    this.props.search(query);
  }
  render() {
    return (
      <Search movies={this.props.movies}/>
    );
  }
}

SearchContainer.propTypes = {
  movies: PropTypes.shape({
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired
  }).isRequired
}

function mapStateToProps (state) {
  return {
    movies: state.search
  }
}

function mapDispatchToProps (dispatch) {
  return {
    search: (query) => dispatch(searchFilm(query))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
