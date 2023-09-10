import { useState, createContext } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  console.log(cart);
  const addToCart = (item) => {
    if (cart.includes(item)) {
      setCart(cart.filter((cartItem) => cartItem.cardTitle !== item.cardTitle));
    } else {
      setCart([...cart, item]);
    }
  };

  return <CartContext.Provider value={{ cartItems: cart, addToCart }}>{children}</CartContext.Provider>;
}

export default CartProvider;
