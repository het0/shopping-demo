import { Currencies } from '@/constants/constants';

export const getCompareCurrencies = function (base: Currencies): string {
    return Object.keys(Currencies)
        .reduce((a, c) => (c !== base ? `${a},${c}` : a), '')
        .substring(1);
};
