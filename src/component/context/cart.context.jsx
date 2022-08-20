import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // function 1: cheack if cartItem contains producToAdd
  const exitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // function 2: if found increment by one
  if (exitingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  // function 3: return new array with modifiled cartItems /new cart
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, removeItem) => {
  // function 1: cheack if cartItem contains producToAdd
  const exitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removeItem.id
  );
  if (exitingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === removeItem.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

const clearCartItem = (cartItems, clearItem) =>
  cartItems.filter((cartItem) => cartItem.id !== clearItem.id);

export const CartContext = createContext({
  isCartDropdown: false,
  setisCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartDropdown, setisCartDropdown] = useState(false);
  const [cartItems, setCartitems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartitems(addCartItem(cartItems, productToAdd));
  };
  const removeFromCart = (removeItem) => {
    setCartitems(removeCartItem(cartItems, removeItem));
  };
  const clearItemFromCart = (clearItem) => {
    setCartitems(clearCartItem(cartItems, clearItem));
  };

  const value = {
    isCartDropdown,
    setisCartDropdown,
    addItemToCart,
    cartItems,
    cartCount,
    removeFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
