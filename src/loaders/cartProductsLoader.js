import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
    const data = await fetch('products.json');
    const products = await data.json();
    const cart = getShoppingCart();
    const cartProducts = [];
    for(const id in cart) {
        const foundProduct = products.find(product => product.id === id);
        if(foundProduct) {
            foundProduct.quantity = cart[id];
            cartProducts.push(foundProduct)
        };
    }
    return cartProducts
}

export default cartProductsLoader;