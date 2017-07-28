import React from 'react';

import Header from './Header';
import MainMovieContainer from '../containers/MainMovieContainer';
import DocumentariesContainer from '../containers/DocumentariesContainer';

function Home () {
  return (
    <div>
      <MainMovieContainer />
      <DocumentariesContainer />
    </div>
  )
}

export default Home;
