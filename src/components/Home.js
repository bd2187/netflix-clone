import React, { Component } from 'react';

import MainMovieContainer from '../containers/MainMovieContainer';
import ActionAdventureContainer from '../containers/ActionAdventureContainer';
import ComediesContainer from '../containers/ComediesContainer';
import DocumentariesContainer from '../containers/DocumentariesContainer';
import DramasContainer from '../containers/DramasContainer';
import HorrorContainer from '../containers/HorrorContainer';
import RomanceContainer from '../containers/RomanceContainer';
import ScifiContainer from '../containers/ScifiContainer';
import ThrillerContainer from '../containers/ThrillerContainer';
import TrendingContainer from '../containers/TrendingContainer';
import MovieGenre from './MovieGenre/MovieGenre';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchActionAdventure } from '../actions';

// <MovieGenre
//   genre={"Action & Adventure"}
//   isFetching = {this.props.isFetching}
//   error = {this.props.error}
//   movies = {this.props.movies}/>

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchActionAdventure();
  }

  render() {
    const { actionAdventure } = this.props;

    return (
      <div>
        <MainMovieContainer />
        <TrendingContainer />
        <MovieGenre
          genre={'Action & Adventure'}
          isFetching={actionAdventure.isFetching}
          error={actionAdventure.error}
          movies={actionAdventure.movies}
        />
        <ComediesContainer />
        <DocumentariesContainer />
        <DramasContainer />
        <HorrorContainer />
        <RomanceContainer />
        <ScifiContainer />
        <ThrillerContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    actionAdventure: state.actionAdventure
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchActionAdventure }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
