import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { IRootState } from '@/redux/reducers';
import { HOME_ROUTE } from '@/constants/routes';

import styles from './Breadcrumbs.module.scss';

const BreadcrumbsComp = () => {
    const router = useRouter();
    const products = useSelector((state: IRootState) => state.products.products);
    const currentProduct = useSelector((state: IRootState) => state.currentProduct.product);

    const showBreadcrumbs = currentProduct && router.pathname !== HOME_ROUTE;

    return (
        <div className={styles.container}>
            <ol className={styles.breadcrumbs}>
                <li className={styles.link}>
                    {showBreadcrumbs ? (
                        <Link href={HOME_ROUTE}>
                            <a>Home</a>
                        </Link>
                    ) : (
                        `${products.length} Product(s) found.`
                    )}
                </li>
                {showBreadcrumbs && <li className={styles.link}>{currentProduct.title}</li>}
            </ol>
        </div>
    );
};

const Breadcrumbs = React.memo(BreadcrumbsComp);

export { Breadcrumbs };
