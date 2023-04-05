import { useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import {
  addToDb,
  getShoppingCart,
  deleteShoppingCart,
} from "../../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (product) => {
    product.quantity += 1;

    const foundInCart = cartProducts.find((pd) => pd.id === product.id);
    if (foundInCart) {
      const remaining = cartProducts.filter((pd) => pd.id !== product.id);
      setCartProducts([...remaining, product]);
    } else setCartProducts([...cartProducts, product]);
    addToDb(product.id);
  };

  const handleClearCart = () => {
    setCartProducts([]);
    deleteShoppingCart();
  };

  const handleFetchCartProducts = (products) => {
    const cart = getShoppingCart();
    const productsToBeAdded = [];
    for (const id in cart) {
      const product = products.find((p) => p.id === id);
      if (product) {
        product.quantity = cart[id];
        productsToBeAdded.push(product);
      }
    }
    setCartProducts(productsToBeAdded);
  };
  return (
    <>
      <div className="shop-container">
        <Products
          handleAddToCart={handleAddToCart}
          handleFetchCartProducts={handleFetchCartProducts}
          cartProducts={cartProducts}
        />
        <Cart cartProducts={cartProducts} handleClearCart={handleClearCart} go/>
      </div>
    </>
  );
};

export default Shop;
