import { createSlice } from '@reduxjs/toolkit';

import { IUIState } from './types';

const initialState: IUIState = {
    isCartOpen: false
};

const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart(state) {
            state.isCartOpen = !state.isCartOpen;
        }
    }
});

export const { toggleCart } = UISlice.actions;
export default UISlice.reducer;
