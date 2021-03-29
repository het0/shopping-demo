import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addProduct } from '@/redux/cart/reducer';
import { IRootState } from '@/redux/reducers';
import { useFormattedPrice } from '@/hooks/useFormattedPrice';

import styles from './ProductInfo.module.scss';

const ProductInfoComp = () => {
    const dispatch = useDispatch();
    const formatPrice = useFormattedPrice();

    const currentProduct = useSelector((state: IRootState) => state.currentProduct.product);

    const handleAddToCart = useCallback(
        (e) => {
            e.stopPropagation();
            dispatch(addProduct(currentProduct));
        },
        [currentProduct]
    );

    if (!currentProduct) {
        return null;
    }

    const { formattedPrice } = formatPrice(currentProduct.price);

    return (
        <div className={styles.container}>
            <div className={styles.productImage}>
                <img src={currentProduct.image} alt={currentProduct.description} />
            </div>
            <div className={styles.productInfo}>
                <h1 className={styles.title}>{currentProduct.title}</h1>
                <div className={styles.price}>{formattedPrice}</div>
                <div className={styles.description}>{currentProduct.description}</div>
                <div className={styles.addToCart} onClick={handleAddToCart}>
                    Add to Cart
                </div>
            </div>
        </div>
    );
};

const ProductInfo = React.memo(ProductInfoComp);

export { ProductInfo };
