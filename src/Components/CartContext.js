import { createContext, useState } from 'react';

const CartContext = createContext(); 

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

   const clearCart = () => {
    setCartItems([]); 
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemsToCart , clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; 
