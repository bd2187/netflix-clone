import React from 'react';
import { render } from 'react-dom';
import '../public/style/main.scss';

import Header from './components/Header';
import MainMovie from './components/MainMovie';

function App() {
  return (
    <div>
      <Header />
      <MainMovie />
    </div>
  )
}


import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { fetchMainMovie } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

console.log(store.getState());
store.dispatch(fetchMainMovie())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
