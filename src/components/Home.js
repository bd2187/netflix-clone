import React, { Component } from 'react';

import MainMovieContainer from '../containers/MainMovieContainer';
import MovieGenre from './MovieGenre/MovieGenre';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchActionAdventure } from '../actions';
import { fetchComedies } from '../actions';
import { fetchDocumentaries } from '../actions';
import { fetchDramas } from '../actions';
import { fetchHorror } from '../actions';
import { fetchRomance } from '../actions';
import { fetchScifi } from '../actions';
import { fetchThriller } from '../actions';
import { fetchTrending } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrending();
    this.props.fetchActionAdventure();
    this.props.fetchComedies();
    this.props.fetchDocumentaries();
    this.props.fetchDramas();
    this.props.fetchHorror();
    this.props.fetchRomance();
    this.props.fetchScifi();
    this.props.fetchThriller();
  }

  render() {
    const {
      actionAdventure,
      comedies,
      documentaries,
      dramas,
      horror,
      romance,
      scifi,
      thriller,
      trending
    } = this.props;

    return (
      <div>
        <MainMovieContainer />
        <MovieGenre
          genre={'Trending Now'}
          isFetching={trending.isFetching}
          error={trending.error}
          movies={trending.movies}
        />
        <MovieGenre
          genre={'Action & Adventure'}
          isFetching={actionAdventure.isFetching}
          error={actionAdventure.error}
          movies={actionAdventure.movies}
        />
        <MovieGenre
          genre={'Comedies'}
          isFetching={comedies.isFetching}
          error={comedies.error}
          movies={comedies.movies}
        />
        <MovieGenre
          genre={'Documentaries'}
          isFetching={documentaries.isFetching}
          error={documentaries.error}
          movies={documentaries.movies}
        />
        <MovieGenre
          genre={'Dramas'}
          isFetching={dramas.isFetching}
          error={dramas.error}
          movies={dramas.movies}
        />
        <MovieGenre
          genre={'Horror'}
          isFetching={horror.isFetching}
          error={horror.error}
          movies={horror.movies}
        />
        <MovieGenre
          genre={'Romance'}
          isFetching={romance.isFetching}
          error={romance.error}
          movies={romance.movies}
        />
        <MovieGenre
          genre={'Sci-Fi'}
          isFetching={scifi.isFetching}
          error={scifi.error}
          movies={scifi.movies}
        />
        <MovieGenre
          genre={'Thrillers'}
          isFetching={thriller.isFetching}
          error={thriller.error}
          movies={thriller.movies}
        />
      </div>
    );
  }
}

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
  return bindActionCreators(
    {
      fetchActionAdventure,
      fetchComedies,
      fetchDocumentaries,
      fetchDramas,
      fetchHorror,
      fetchRomance,
      fetchScifi,
      fetchThriller,
      fetchTrending
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
