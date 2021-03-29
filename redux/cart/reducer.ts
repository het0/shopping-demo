import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/types/items';

import { ICartState } from './types';

const initialState: ICartState = {
    products: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<IProduct>) {
            const alreadyInCart = state.products.findIndex((p) => p.id === action.payload.id);

            if (alreadyInCart === -1) {
                state.products.push({
                    ...action.payload,
                    qty: 1
                });
            } else {
                state.products[alreadyInCart].qty++;
            }
        },
        removeProduct(state, action: PayloadAction<number>) {
            const alreadyInCart = state.products.findIndex((p) => p.id === action.payload);
            state.products.splice(alreadyInCart, 1);
        }
    }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
