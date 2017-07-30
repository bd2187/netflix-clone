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
    // const { isFetching, error, query, movies } = this.props;
    // console.log(this.props)
    return (
      <Search movies={this.props.movies}/>
    )
  }
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
