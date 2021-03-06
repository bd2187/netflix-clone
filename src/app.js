import React from 'react';
import { render } from 'react-dom';
import '../public/style/main.scss';

import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import routes from './config/routes';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
