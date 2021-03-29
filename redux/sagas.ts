import { all, fork } from 'redux-saga/effects';

import productsSagas from './products/sagas';
import infoSagas from './info/sagas';
import currentProductSagas from './currentProduct/sagas';

function* rootSaga() {
    yield all([fork(productsSagas), fork(infoSagas), fork(currentProductSagas)]);
}

export default rootSaga;
