import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { HOME_ROUTE } from '@/constants/routes';
import { IRootState } from '@/redux/reducers';

import { CurrencySelector } from './CurrencySelector/CurrencySelector';

import styles from './TopBar.module.scss';

const TopBarComp = () => {
    const products = useSelector((state: IRootState) => state.products.products);

    return (
        <div className={styles.topBar}>
            <div className={styles.title}>
                <Link href={HOME_ROUTE}>Shopping app demo</Link>
            </div>
            <CurrencySelector />
        </div>
    );
};

const TopBar = React.memo(TopBarComp);

export { TopBar };
