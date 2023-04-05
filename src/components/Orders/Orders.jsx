import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Shop/Cart/Cart';
import OrderItem from './Order/OrderItem';
import './Orders.css'

const Orders = () => {
    const cartProducts = useLoaderData();
    return (
            <>
                {cartProducts.length ? (
                    <div className="shop-container orders-container">
                    <div className='cart-products-container'>
                        {cartProducts.map(cartProduct => <OrderItem cartProduct={cartProduct} key={cartProduct.id}/>)}
                    </div>
                    <Cart cartProducts={cartProducts}/>
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