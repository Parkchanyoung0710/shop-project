import { useState, createContext } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const checkDup = cart.filter((cartItem) => cartItem.cardTitle === item.cardTitle);

    if (checkDup.length > 0) {
      setCart(cart.filter((cartItem) => cartItem.cardTitle !== item.cardTitle));
    } else {
      setCart([...cart, item]);
    }
  };

  return <CartContext.Provider value={{ cartItems: cart, addToCart }}>{children}</CartContext.Provider>;
}

export default CartProvider;
