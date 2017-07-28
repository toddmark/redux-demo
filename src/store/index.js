import { combineReducers, applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import DevTools from '../tool/devTool.js'

const enhancer = compose(
  applyMiddleware(logger),
  DevTools.instrument()
)

//reducer
import reducers from '../reducer/index.js';


let store = createStore(reducers, enhancer)

export default store;