import { createSlice } from '@reduxjs/toolkit';

import { IProductsState } from './types';

const initialState: IProductsState = {
    products: [],
    loading: false,
    error: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(state) {
            state.loading = true;
        },
        getProductsSuccess(state, action) {
            state.loading = false;
            state.products = action.payload;
        },
        getProductsFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { getProducts, getProductsSuccess, getProductsFailed } = productsSlice.actions;
export default productsSlice.reducer;
