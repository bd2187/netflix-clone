import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFilm } from '../actions';
import Search from '../components/Search/Search';


class SearchContainer extends Component {
  componentDidMount() {
    const query = this.props.match.params.search;
    this.props.search(query);
  }
  render() {
    const { isFetching, error, query, movies } = this.props;
    return (
      <Search
        isFetching={isFetching}
        error={error}
        query={query}
        movies={movies}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    isFetching: state.search.isFetching,
    error: state.search.error,
    query: state.search.query,
    movies: state.search.movies
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
