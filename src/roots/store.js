import { createStore, applyMiddleware, compose } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import reducers from "./rootReducer";
import sagas from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "cart",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default () => ({ store, persistor });
