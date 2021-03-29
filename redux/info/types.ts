import { Currencies, CurrenciesFormat } from '@/constants/constants';
import { LoadingState } from '@/types/api';

export type IRates = {
    base: Currencies;
    date: string;
    rates: {
        [key in keyof typeof Currencies]?: number;
    };
};

export interface IInfoState extends LoadingState {
    totalPrice: number;
    currency: Currencies;
    format: CurrenciesFormat;
    rates: IRates;
}
