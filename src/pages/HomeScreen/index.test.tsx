import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeScreen from './index';
import '@testing-library/jest-dom';
import { ShoppingCartContext, ShoppingCartContextType, ShoppingCartProvider } from '../../contexts/ShoppingCart';

const cart = [{
  id: 1,
  title: 'Product 1',
  image: 'https://picsum.photos/200',
  price: 100,
  quantity: 0,
}, {
  id: 2,
  title: 'Product 2',
  image: 'https://picsum.photos/200',
  price: 200,
  quantity: 0,
}];

const contextValue: ShoppingCartContextType = {
  cart,
  incrementQuantity: jest.fn(),
  decrementQuantity: jest.fn(),
  hideCart: jest.fn(),
  showCart: jest.fn(),
  isCartVisible: false,
  removeFromCart: jest.fn(),
  addToCart: jest.fn(),
  setFilter: jest.fn(),
  filter: '',
  cleanCart: jest.fn(),
};

describe('HomeScreen', () => {
  it('should render the top bar', () => {
    render(
      <ShoppingCartProvider>
        <HomeScreen/>
      </ShoppingCartProvider>,
    );
    const title = screen.getByText('Products');
    expect(title).toBeInTheDocument();
  });

  it('should render the product cards', () => {
    render(
      <ShoppingCartContext.Provider value={contextValue}>
        <HomeScreen/>
      </ShoppingCartContext.Provider>,
    );
    const productCards = screen.getAllByRole('article');
    expect(productCards).toHaveLength(cart.length);
  });

});