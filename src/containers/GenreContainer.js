import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchGenreActions from '../actions';
import Genre from '../components/Genre/Genre';

class GenreContainer extends Component {
  componentDidMount() {
    switch (this.props.match.params.genre) {
      case 'Trending Now':
        return this.props.fetchTrending();
      case 'Comedies':
        return this.props.fetchComedies();
      case 'Documentaries':
        return this.props.fetchDocumentaries();
      case 'Dramas':
        return this.props.fetchDramas();
      case 'Horror':
        return this.props.fetchHorror();
      case 'Romance':
        return this.props.fetchRomance();
      case 'Sci-Fi':
        return this.props.fetchScifi();
      case 'Thrillers':
        return this.props.fetchThriller();
      default:
        return null
    }
  }

  render() {
    var movies;
    var genre = this.props.match.params.genre;
    switch (this.props.match.params.genre) {
      case 'Trending Now':
        movies = this.props.trending;
        break;
      case 'Comedies':
        movies = this.props.comedies;
        break;
      case 'Documentaries':
        movies = this.props.documentaries;
        break;
      case 'Dramas':
        movies = this.props.dramas;
        break;
      case 'Horror':
        movies = this.props.horror;
        break;
      case 'Romance':
        movies = this.props.romance;
        break;
      case 'Sci-Fi':
        movies = this.props.scifi;
        break;
      case 'Thrillers':
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

function mapStateToProps (state) {
  return {
    trending: state.trending,
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
