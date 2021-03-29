import { getCompareCurrencies } from '@/utils/utils';

import { Currencies } from './constants';

export const PRODUCTS_ENDPOINT = 'https://fakestoreapi.com/products';
export const CURRENCY_RATES_ENDPOINT = (base: Currencies) => `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${getCompareCurrencies(base)}`;
