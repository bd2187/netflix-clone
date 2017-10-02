import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGenre, fetchTrending } from '../actions';
import * as constants from '../constants';
import Genre from '../components/Genre/Genre';

const genres = {
  trendingNow: 'Trending Now',
  actionAdventure: 'Action & Adventure',
  comedies: 'Comedies',
  documentaries: 'Documentaries',
  dramas: 'Dramas',
  horror: 'Horror',
  romance: 'Romance',
  scifi: 'Sci-Fi',
  thrillers: 'Thrillers'
};

class GenreContainer extends Component {
  componentDidMount() {
    this.props.fetchTrending();
    this.props.fetchGenre(
      constants.FETCHING_ACTION_ADVENTURE,
      constants.FETCHING_ACTION_ADVENTURE_SUCCESS,
      constants.FETCHING_ACTION_ADVENTURE_FAILURE,
      28
    );
    this.props.fetchGenre(
      constants.FETCHING_COMEDIES,
      constants.FETCHING_COMEDIES_SUCCESS,
      constants.FETCHING_COMEDIES_FAILURE,
      35
    );
    this.props.fetchGenre(
      constants.FETCHING_DOCUMENTARIES,
      constants.FETCHING_DOCUMENTARIES_SUCCESS,
      constants.FETCHING_DOCUMENTARIES_FAILURE,
      99
    );
    this.props.fetchGenre(
      constants.FETCHING_DRAMAS,
      constants.FETCHING_DRAMAS_SUCCESS,
      constants.FETCHING_DRAMAS_FAILURE,
      18
    );
    this.props.fetchGenre(
      constants.FETCHING_HORROR,
      constants.FETCHING_HORROR_SUCCESS,
      constants.FETCHING_HORROR_FAILURE,
      27
    );
    this.props.fetchGenre(
      constants.FETCHING_ROMANCE,
      constants.FETCHING_ROMANCE_SUCCESS,
      constants.FETCHING_ROMANCE_FAILURE,
      10749
    );
    this.props.fetchGenre(
      constants.FETCHING_SCIFI,
      constants.FETCHING_SCIFI_SUCCESS,
      constants.FETCHING_SCIFI_FAILURE,
      878
    );
    this.props.fetchGenre(
      constants.FETCHING_THRILLER,
      constants.FETCHING_THRILLER_SUCCESS,
      constants.FETCHING_THRILLER_FAILURE,
      53
    );
  }
  render() {
    var movies;
    var genre = this.props.match.params.genre;
    switch (this.props.match.params.genre) {
      case genres.trendingNow:
        movies = this.props.trending;
        break;
      case genres.actionAdventure:
        movies = this.props.actionAdventure;
        break;
      case genres.comedies:
        movies = this.props.comedies;
        break;
      case genres.documentaries:
        movies = this.props.documentaries;
        break;
      case genres.dramas:
        movies = this.props.dramas;
        break;
      case genres.horror:
        movies = this.props.horror;
        break;
      case genres.romance:
        movies = this.props.romance;
        break;
      case genres.scifi:
        movies = this.props.scifi;
        break;
      case genres.thrillers:
        movies = this.props.thriller;
        break;
      default:
        movies = {
          isFetching: false,
          error: '',
          movies: []
        };
    }

    return <Genre movies={movies} genre={genre} />;
  }
}

const genreProptype = PropTypes.shape({
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired
}).isRequired;

GenreContainer.propTypes = {
  trending: genreProptype,
  actionAdventure: genreProptype,
  comedies: genreProptype,
  documentaries: genreProptype,
  dramas: genreProptype,
  horror: genreProptype,
  scifi: genreProptype,
  thriller: genreProptype
};

function mapStateToProps(state) {
  return {
    trending: state.trending,
    actionAdventure: state.actionAdventure,
    comedies: state.comedies,
    documentaries: state.documentaries,
    dramas: state.dramas,
    horror: state.horror,
    romance: state.romance,
    scifi: state.scifi,
    thriller: state.thriller
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTrending, fetchGenre }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreContainer);
