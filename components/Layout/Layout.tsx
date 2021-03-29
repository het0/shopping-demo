import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { TopBar } from '@/components/TopBar/TopBar';
import { Cart } from '@/components/Cart/Cart';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { getExchangeRates } from '@/redux/info/reducer';

import styles from './Layout.module.scss';

export type Props = Readonly<{
    children: React.ReactNode;
}>;

const LayoutComp = ({ children }: Props) => {
    const dispatch = useDispatch();

    // currency rates should always be updated on page render
    useEffect(() => dispatch(getExchangeRates()), [dispatch]);

    return (
        <>
            <TopBar />
            <main className={styles.base}>
                <Cart />
                <Breadcrumbs />
                {children}
            </main>
        </>
    );
};

const Layout = React.memo(LayoutComp);

export { Layout };
