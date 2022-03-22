import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fonts from './styles/fonts';
import GlobalStyles from './styles/global';

// redux 全家桶
import thunk from 'redux-thunk';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <>
  <GlobalStyles />
  <Fonts />
  <Provider store={store}>
    <App />
  </Provider>
  </>,

  document.getElementById('root')
);

