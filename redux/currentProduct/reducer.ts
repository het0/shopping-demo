import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/types/items';

import { ICurrentProductState } from './types';

const initialState: ICurrentProductState = {
    product: null
};

const currentProductSlice = createSlice({
    name: 'currentProduct',
    initialState,
    reducers: {
        getProduct(state, action: PayloadAction<number>) {},
        getProductSuccess(state, action: PayloadAction<IProduct>) {
            state.product = action.payload;
        },
        clearProduct(state) {
            state.product = null;
        }
    }
});

export const { getProduct, getProductSuccess, clearProduct } = currentProductSlice.actions;
export default currentProductSlice.reducer;
