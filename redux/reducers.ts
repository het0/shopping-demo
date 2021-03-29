import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './cart/reducer';
import productsReducer from './products/reducer';
import currentProductReducer from './currentProduct/reducer';
import infoReducer from './info/reducer';
import uiReducer from './ui/reducer';

const RootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    currentProduct: currentProductReducer,
    info: infoReducer,
    ui: uiReducer
});

export type IRootState = ReturnType<typeof RootReducer>;

export default RootReducer;
