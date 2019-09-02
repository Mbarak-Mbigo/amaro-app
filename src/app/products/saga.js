import { call, put, takeLatest } from "redux-saga/effects";

import { getProducts } from '../../api/products/productsService';

import { actionTypes, fetchProductSucceeded, fetchProductFailed } from './action';

function* fetchProducts() {
  try {
    const data = yield call(getProducts);

    yield put(fetchProductSucceeded(data.products));
    
  } catch (error) {
    yield put(fetchProductFailed('Failed to fetch products'));
  }
}

function* watchFetchProducts() {
  yield takeLatest(actionTypes.FETCH_PRODUCTS, fetchProducts);
}

export default watchFetchProducts;

