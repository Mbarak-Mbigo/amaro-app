import { call, all, spawn } from 'redux-saga/effects';

export default function* rootSaga () {
  const sagas = [
    //individual sagas here
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
