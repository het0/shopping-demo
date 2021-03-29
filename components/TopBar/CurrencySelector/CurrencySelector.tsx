import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';

import { IRootState } from '@/redux/reducers';
import { changeCurrency } from '@/redux/info/reducer';
import { Currencies } from '@/constants/constants';

import styles from './CurrencySelector.module.scss';

const initialValues = Object.keys(Currencies).map((key) => ({ value: key, label: Currencies[key] }));

const CurrencySelectorComp = () => {
    const dispatch = useDispatch();
    const currency = useSelector<IRootState>((state) => state.info.currency);

    const onSelect = useCallback((e) => {
        dispatch(changeCurrency(e.value));
    }, []);

    return (
        <div className={styles.container}>
            <Select
                instanceId="currencySelector"
                backspaceRemovesValue={false}
                hideSelectedOptions={false}
                isClearable={false}
                onChange={onSelect}
                options={initialValues}
                tabSelectsValue={false}
                value={{ value: currency, label: currency }}
            />
        </div>
    );
};

const CurrencySelector = React.memo(CurrencySelectorComp);

export { CurrencySelector };
