import React from 'react';
import './OrderItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const OrderItem = ({cartProduct}) => {
    return (
        <div className='cart-product'>
            <img src={cartProduct.img} alt="" />
            <div>
                <h2>{cartProduct.name}</h2>
                <p>Price: <span className='bold'>${cartProduct.price}</span></p>
                <p>Shipping Charge: <span className='bold'>$5</span></p>
                <p>Quantity: <span className='bold'>{cartProduct.quantity}</span></p>
            </div>
            <button><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    );
};

export default OrderItem;