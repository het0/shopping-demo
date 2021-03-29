import { IProduct } from '@/types/items';

export interface IProductsState {
    products: IProduct[];
    loading: boolean;
    error: any;
}
