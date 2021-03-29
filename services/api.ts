import axios, { AxiosInstance, AxiosPromise } from 'axios';

import { PRODUCTS_ENDPOINT, CURRENCY_RATES_ENDPOINT } from '@/constants/api';
import { Currencies } from '@/constants/constants';
import { IProduct } from '@/types/items';

const REQUEST_TIMEOUT = 3000;

class API {
    protected readonly instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            timeout: REQUEST_TIMEOUT
        });
    }

    getProducts(): AxiosPromise<IProduct[]> {
        return this.instance.get(PRODUCTS_ENDPOINT);
    }

    getExchangeRates(base: Currencies): AxiosPromise<IProduct[]> {
        return this.instance.get(CURRENCY_RATES_ENDPOINT(base));
    }
}

export default new API();
