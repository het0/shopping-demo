import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { IRootState } from '@/redux/reducers';
import { Layout } from '@/components/Layout/Layout';
import { ProductInfo } from '@/components/ProductInfo/ProductInfo';
import { getProducts } from '@/redux/products/reducer';
import { getProduct, clearProduct } from '@/redux/currentProduct/reducer';

import styles from '@/styles/index.module.scss';

export default function ProductPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const products = useSelector((state: IRootState) => state.products.products);

    const { id } = router.query;

    useEffect(() => {
        if (products.length > 0) {
            if (id) {
                dispatch(getProduct(Number(id)));
            }
        } else {
            // there is no api endpoint for single product, fetching all products to get the right one
            dispatch(getProducts());
        }
        return () => {
            dispatch(clearProduct());
        };
    }, [dispatch, products, id]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Shopping APP - Product</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <ProductInfo />
            </Layout>
        </div>
    );
}
