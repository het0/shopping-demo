import { fork, put, takeEvery, all, select } from 'redux-saga/effects';

import { IProduct } from '@/types/items';
import { IRootState } from '@/redux/reducers';

import { getProduct, getProductSuccess } from './reducer';

function* getCurrentProductSaga(action) {
    const products: IProduct[] = yield select((state: IRootState) => state.products.products);
    const currentProduct = products.find((p) => p.id === action.payload);
    if (currentProduct) {
        yield put(getProductSuccess(currentProduct));
    }
}

function* watchGetCurrentProduct() {
    yield takeEvery(getProduct.type, getCurrentProductSaga);
}

export default function* currentProductSagas() {
    yield all([fork(watchGetCurrentProduct)]);
}
