import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import { Response } from '@/hooks/useFormattedPrice';
import { ICartProduct } from '@/types/items';

import styles from './CartProduct.module.scss';

type Props = Readonly<
    ICartProduct & {
        onRemove: (id: number) => void;
        formatPrice: (price: number) => Response;
    }
>;

const CartProductComp = ({ image, title, qty, price, id, onRemove, formatPrice }: Props) => {
    const [isRemoveHovered, setIsRemoveHovered] = useState<boolean>(false);

    const handleRemoveMouseEnter = useCallback(() => setIsRemoveHovered(true), []);
    const handleRemoveMouseLeave = useCallback(() => setIsRemoveHovered(false), []);

    const handleRemoveProduct = useCallback(() => onRemove(id), [id]);

    const baseClasses = classnames(styles.base, isRemoveHovered && styles.base__removeHovered);

    const { formattedPrice } = formatPrice(price);

    return (
        <div className={baseClasses}>
            <div className={styles.remove} onClick={handleRemoveProduct} onMouseOver={handleRemoveMouseEnter} onMouseOut={handleRemoveMouseLeave}>
                X
            </div>
            <div className={styles.icon}>
                <img src={image} />
            </div>
            <div className={styles.details}>
                <div className={styles.title}>{title}</div>
                <div className={styles.qty}>Quantity: {qty}</div>
            </div>
            <div className={styles.price}>{formattedPrice}</div>
        </div>
    );
};

const CartProduct = React.memo(CartProductComp);

export { CartProduct };
