import React from 'react';

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


function Home () {
  return (
    <div>
      <MainMovieContainer />
      <TrendingContainer />
      <ActionAdventureContainer />
      <ComediesContainer />
      <DocumentariesContainer />
      <DramasContainer />
      <HorrorContainer />
      <RomanceContainer />
      <ScifiContainer />
      <ThrillerContainer />
    </div>
  )
}

export default Home;
