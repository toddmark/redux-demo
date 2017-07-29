import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '../store/index.js'
import DevTools from '../tool/devTool.js';


import Counter from './counter.js';
import Todos from './todos.js';


ReactDOM.render((
  <AppContainer>
    <Provider store={store}>
      <div>
        <Counter />
        <hr/>
        <Todos />
        <DevTools />
      </div>
    </Provider>
  </AppContainer>
), document.getElementById('app'));


if (module.hot) {
  module.hot.accept()
}