import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Currencies, CurrenciesFormat } from '@/constants/constants';

import { IInfoState, IRates } from './types';

const initialState: IInfoState = {
    totalPrice: 0,
    currency: Currencies.USD,
    format: CurrenciesFormat.USD,
    rates: {
        base: null,
        date: null,
        rates: {}
    },
    loading: false,
    error: null
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        changeCurrency(state, action: PayloadAction<Currencies>) {
            state.currency = action.payload;
            state.format = CurrenciesFormat[action.payload];
        },
        getExchangeRates(state) {
            state.loading = true;
        },
        getExchangeRatesSuccess(state, action: PayloadAction<IRates>) {
            state.rates = action.payload;
        },
        getExchangeRatesFailed(state, action: PayloadAction<any>) {
            state.loading = false;
            state.error = action.payload;
        },
        updateTotalPrice(state, action: PayloadAction<number>) {
            state.totalPrice = action.payload;
        }
    }
});

export const { changeCurrency, getExchangeRates, getExchangeRatesSuccess, getExchangeRatesFailed, updateTotalPrice } = infoSlice.actions;
export default infoSlice.reducer;
