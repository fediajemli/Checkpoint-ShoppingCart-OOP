import { ShoppingCart } from "./models/cart.js";
import { products } from "./models/product.js";
const cart = new ShoppingCart();
// console.log(cart);
cart.addToCart(products[0]);
cart.addToCart(products[0]);
cart.addToCart(products[2]);
// cart.clear();
// console.log(cart.getTotalPrice());
// console.log(cart);
// cart.removeFromCart(products[2]);
const item = cart.items.find(i => i.product.id === products[0].id);
item.increaseQuantity();
item.increaseQuantity();
item.decreaseQuantity();
item.decreaseQuantity();
item.decreaseQuantity();
item.decreaseQuantity();

console.log(item);

console.log(cart);