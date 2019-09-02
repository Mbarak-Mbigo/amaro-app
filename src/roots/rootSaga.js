import { call, all, spawn } from 'redux-saga/effects';

import products from '../app/products/saga';

export default function* rootSaga () {
  const sagas = [
    products,
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break;
        } catch (error) {
          console.log(error)
        }
      }
    }))
  );
}
