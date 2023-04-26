import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Shop/Cart/Cart';
import OrderItem from './Order/OrderItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCartProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState(savedCartProducts);

    const deleteCartProduct = id => {
        const restCartProducts = cartProducts.filter(product => product.id !== id);
        setCartProducts(restCartProducts)
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCartProducts([]);
        deleteShoppingCart();
      };
    return (
            <>
                {cartProducts.length ? (
                    <div className="shop-container orders-container">
                    <div className='cart-products-container'>
                        {cartProducts.map(cartProduct => <OrderItem cartProduct={cartProduct} deleteCartProduct={deleteCartProduct} key={cartProduct.id}/>)}
                    </div>
                    <Cart cartProducts={cartProducts} handleClearCart={handleClearCart}>
                        <Link to="/checkout" className="review-order-btn">Proceed To Checkout</Link>
                    </Cart>
                </div>
                ) : (
                    <div className='no-orders'>
                        <h2>No Orders Pending</h2>
                    </div>
                )}
            </>
    );
};

export default Orders;