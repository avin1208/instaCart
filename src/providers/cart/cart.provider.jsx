import React, { createContext, useState,  useEffect } from 'react';

import { addItemToCart, removeItemFromCart, getCartItemsCount, getCartTotal } from './cart.utils';

export const CartContext = createContext ({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    CartItemsCount: 0,
    cartTotal: 0
});

const CartProvider = ({children}) => {

    const [cartItems,setCartItems] = useState([]);
    const [CartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
    
    },[cartItems]);

    return (
        <CartContext.Provider
        value={{ 
            cartItems,
            addItem,
            removeItem,
            CartItemsCount,
            cartTotal
        }}
        >
         {children}
        </CartContext.Provider>
    );

};

export default CartProvider;