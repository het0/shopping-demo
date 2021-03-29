import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import { useFormattedPrice } from '@/hooks/useFormattedPrice';
import { IRootState } from '@/redux/reducers';
import { removeProduct } from '@/redux/cart/reducer';
import { toggleCart } from '@/redux/ui/reducer';

import { CartProduct } from './CartProduct/CartProduct';
import { CartIcon } from './CartIcon/CartIcon';

import styles from './Cart.module.scss';

const CartComp = () => {
    const dispatch = useDispatch();

    const formatPrice = useFormattedPrice();

    const products = useSelector((state: IRootState) => state.cart.products);
    const { totalPrice } = useSelector((state: IRootState) => state.info);
    const isOpen = useSelector((state: IRootState) => state.ui.isCartOpen);

    const totalQty = useMemo(() => products.reduce((a, p) => a + p.qty, 0), [products]);

    const handleToggleCart = useCallback(() => dispatch(toggleCart()), []);
    const onRemove = useCallback((id: number) => dispatch(removeProduct(id)), [dispatch]);

    const cartClasses = classnames(styles.cart, isOpen && styles.cart__open);

    const { formattedPrice } = formatPrice(totalPrice);

    return (
        <div className={cartClasses}>
            <div className={styles.cartBtn} onClick={handleToggleCart}>
                <div className={styles.icon}>{isOpen ? 'X' : <CartIcon />}</div>
                {!isOpen && <div className={styles.quantity}>{totalQty}</div>}
            </div>
            <div className={styles.content}>
                <div className={styles.cartHeader}>
                    <div className={styles.icon}>
                        <CartIcon />
                        <div className={styles.quantity}>{totalQty}</div>
                    </div>
                    <div className={styles.headerText}>Bag</div>
                </div>
                <div className={styles.cartProducts}>
                    {products.map((p) => (
                        <CartProduct key={p.id} {...p} onRemove={onRemove} formatPrice={formatPrice} />
                    ))}
                </div>
                <div className={styles.cartFooter}>
                    <div className={styles.info}>
                        <div className={styles.total}>Total</div>
                        <div className={styles.totalPrice}>{formattedPrice}</div>
                    </div>
                    <div className={styles.checkoutBtn}>Checkout</div>
                </div>
            </div>
        </div>
    );
};

const Cart = React.memo(CartComp);

export { Cart };
