import React, { createContext, useContext, useState } from 'react';
import { Product } from '../../common/types';
import { productsMock } from '../../api/mock/products';

interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  isCartVisible: boolean;
  hideCart: () => void;
  showCart: () => void;
}

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

const ShoppingCartContext = createContext<ShoppingCartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  isCartVisible: false,
  hideCart: () => {},
  showCart: () => {},
});

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>(productsMock);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product: Product, quantity: number = 1) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const incrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      )
    );
  };

  const hideCart = () => {
    setIsCartVisible(false);
  };

  const showCart = () => {
    setIsCartVisible(true);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, hideCart, showCart, isCartVisible }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};