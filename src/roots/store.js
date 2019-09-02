import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from "redux-saga";

import reducers from './rootReducer';
import sagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

sagaMiddleware.run(sagas);

export default store;
