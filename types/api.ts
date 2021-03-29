import { IProduct } from './items';

export type ProductsAPIResponse = IProduct[];

export type LoadingState = {
    loading: boolean;
    error: any;
};
