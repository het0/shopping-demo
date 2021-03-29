import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '@/redux/products/reducer';
import { IRootState } from '@/redux/reducers';
import { useFormattedPrice } from '@/hooks/useFormattedPrice';
import { Loader } from '@/components/Loader/Loader';

import { Product } from './Product/Product';

import styles from './ProductsList.module.scss';

const ProductsListComp = () => {
    const dispatch = useDispatch();
    const formatPrice = useFormattedPrice();
    const { products, loading } = useSelector((state: IRootState) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className={styles.base}>
            {loading && products.length === 0 && <Loader />}
            {products.map((product) => (
                <Product key={product.id} {...product} formatPrice={formatPrice} />
            ))}
        </div>
    );
};

const ProductsList = React.memo(ProductsListComp);

export { ProductsList };
