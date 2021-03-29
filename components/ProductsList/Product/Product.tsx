import React, { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { Response } from '@/hooks/useFormattedPrice';
import { addProduct } from '@/redux/cart/reducer';
import { PRODUCT_ROUTE } from '@/constants/routes';
import { IProduct } from '@/types/items';

import styles from './Product.module.scss';

type Props = Readonly<
    IProduct & {
        formatPrice: (price: number) => Response;
    }
>;

const ProductComp = ({ title, image, price, id, formatPrice, category, description }: Props) => {
    const dispatch = useDispatch();

    const productBgStyle = useMemo(() => ({ backgroundImage: `url(${image})` }), [image]);

    const handleAddToCart = useCallback((e) => {
        e.stopPropagation();
        dispatch(
            addProduct({
                title,
                image,
                price,
                id,
                category,
                description
            })
        );
    }, []);

    const { currency, originalPrice } = formatPrice(price);

    const beforeDot = parseInt(originalPrice, 10);
    const afterDot = (parseFloat(originalPrice) % 1).toFixed(2).substring(1);

    return (
        <Link href={PRODUCT_ROUTE(id)}>
            <div className={styles.product}>
                <p className={styles.title}>{title}</p>
                <div className={styles.img} style={productBgStyle} />
                <div className={styles.price}>
                    <div>
                        <small>{currency}</small>
                        <b>{beforeDot}</b>
                        <span>{afterDot}</span>
                    </div>
                </div>
                <div className={styles.buy} onClick={handleAddToCart}>
                    Add to cart
                </div>
            </div>
        </Link>
    );
};

const Product = React.memo(ProductComp);

export { Product };
