import './Cart.css'

const Cart = ({cartProducts, handleClearCart}) => {
    const totalPrice = cartProducts.reduce((prev,current) => prev + current.price*current.quantity,0);
    const quantity = cartProducts.reduce((prev,current) => prev + current.quantity,0);
    const tax = totalPrice > 1000 ? totalPrice*0.1 : 0;
    const shippingCharge = 5;
    const grandTotal = totalPrice+shippingCharge+tax;
    return (
        <>
            <div className="cart-container">
                <h2 className='cart-title'>Order Summary</h2>
                <div className="cart-details">
                    <p>Selected Items : {quantity}</p>
                    <p>Total Price : ${totalPrice}</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax : ${tax.toFixed(2)}</p>
                    <p>Grand Total : ${grandTotal.toFixed(2)}</p>
                </div>
                <div className="cart-products">
                    {cartProducts.map(product => (
                        <div className="cart-product">
                            <img src={product.img} alt={product.name} className="cart-product-img"/>
                            <div>
                                <h3 className='cart-product-name'>{product.name}</h3>
                                <p>${product.price} X {product.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-buttons">
                    <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
                    <button className="review-order-btn">Review Order</button>
                </div>
            </div>
        </>
    );
};

export default Cart;