import React, { Component } from 'react';

import MainMovieContainer from '../containers/MainMovieContainer';
import MovieGenre from './MovieGenre/MovieGenre';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrending, fetchGenre } from '../actions';
import * as constants from '../constants';

class Home extends Component {
  constructor(props) {
    super(props);
  }

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
      fetchTrending,
      fetchGenre
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
