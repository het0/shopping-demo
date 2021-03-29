import { fork, put, takeEvery, all, call } from 'redux-saga/effects';

import API from '@/services/api';

import { getProducts, getProductsSuccess, getProductsFailed } from './reducer';

function* getProductsSaga() {
    try {
        const result = yield call(() => API.getProducts());
        yield put(getProductsSuccess(result.data));
    } catch (e) {
        yield put(getProductsFailed(e));
    }
}

function* watchGetProducts() {
    yield takeEvery(getProducts.type, getProductsSaga);
}

export default function* productsSagas() {
    yield all([fork(watchGetProducts)]);
}
