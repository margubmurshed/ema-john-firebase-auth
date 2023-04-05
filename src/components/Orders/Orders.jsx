import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Shop/Cart/Cart';
import OrderItem from './Order/OrderItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCartProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState(savedCartProducts);

    const deleteCartProduct = id => {
        const restCartProducts = cartProducts.filter(product => product.id !== id);
        setCartProducts(restCartProducts)
        removeFromDb(id);
    }
    return (
            <>
                {cartProducts.length ? (
                    <div className="shop-container orders-container">
                    <div className='cart-products-container'>
                        {cartProducts.map(cartProduct => <OrderItem cartProduct={cartProduct} deleteCartProduct={deleteCartProduct} key={cartProduct.id}/>)}
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