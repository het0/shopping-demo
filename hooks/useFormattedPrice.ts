import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { CurrenciesFormat, Currencies } from '@/constants/constants';
import { IRootState } from '@/redux/reducers';

export type Response = {
  currency: string;
  formattedPrice: string;
  originalPrice: string;
};

const useFormattedPrice = () => {
  const { currency, rates: { rates } } = useSelector((state: IRootState) => state.info);
  return useCallback(
    (price: number): Response => {
      const formattedPrice = (price * (rates && rates[currency] ? rates[currency] : 1)).toFixed(2);

      const response = {
        currency: CurrenciesFormat[currency],
        originalPrice: formattedPrice,
        formattedPrice: ''
      };

      if (Currencies.JPY) {
        response.formattedPrice = `${CurrenciesFormat[currency]} ${formattedPrice}`;
      } else {
        response.formattedPrice = `${formattedPrice} ${CurrenciesFormat[currency]}`;
      }

      return response;
    },
    [currency, rates]
  );
};

export { useFormattedPrice };
