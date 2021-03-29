import { fork, put, takeEvery, all, call, select } from 'redux-saga/effects';

import { Currencies } from '@/constants/constants';
import { ICartProduct } from '@/types/items';
import { IRootState } from '@/redux/reducers';
import API from '@/services/api';

import { addProduct, removeProduct } from '../cart/reducer';
import { getExchangeRates, getExchangeRatesFailed, getExchangeRatesSuccess, updateTotalPrice } from './reducer';

function* getExchangeRatesSaga() {
    try {
        // const currentCurrency = yield select((state: IRootState) => state.info.currency);
        // products base currency is USD based on products API
        const result = yield call(() => API.getExchangeRates(Currencies.USD));
        yield put(getExchangeRatesSuccess(result.data));
    } catch (e) {
        yield put(getExchangeRatesFailed(e));
    }
}

function* watchGetExchangeRates() {
    yield takeEvery(getExchangeRates.type, getExchangeRatesSaga);
}

function* calculateTotalSaga() {
    const cartProducts: ICartProduct[] = yield select((state: IRootState) => state.cart.products);
    const total = Number(cartProducts.reduce((a, p) => a + p.price * p.qty, 0).toFixed(2));
    yield put(updateTotalPrice(total));
}

function* watchTotalPrice() {
    yield takeEvery(addProduct.type, calculateTotalSaga);
    yield takeEvery(removeProduct.type, calculateTotalSaga);
}

export default function* infoSagas() {
    yield all([fork(watchGetExchangeRates), fork(watchTotalPrice)]);
}
