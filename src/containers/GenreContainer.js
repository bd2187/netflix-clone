import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchGenreActions from '../actions';
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
}

class GenreContainer extends Component {
  componentDidMount() {
    switch (this.props.match.params.genre) {
      case genres.trendingNow:
        return this.props.fetchTrending();
      case genres.actionAdventure:
        return this.props.fetchActionAdventure();
      case genres.comedies:
        return this.props.fetchComedies();
      case genres.documentaries:
        return this.props.fetchDocumentaries();
      case genres.dramas:
        return this.props.fetchDramas();
      case genres.horror:
        return this.props.fetchHorror();
      case genres.romance:
        return this.props.fetchRomance();
      case genres.scifi:
        return this.props.fetchScifi();
      case genres.thrillers:
        return this.props.fetchThriller();
      default:
        return null
    }
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
    return (
      <Genre movies={movies} genre={genre}/>
    )
  }

}

const genreProptype = (
  PropTypes.shape({
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired
  }).isRequired
);

GenreContainer.propTypes = {
  trending: genreProptype,
  actionAdventure: genreProptype,
  comedies: genreProptype,
  documentaries: genreProptype,
  dramas: genreProptype,
  horror: genreProptype,
  scifi: genreProptype,
  thriller: genreProptype,
}

function mapStateToProps (state) {
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
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(fetchGenreActions, dispatch);
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreContainer);
