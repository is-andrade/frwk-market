import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './index';
import { Product } from '../../common/types';
import { ShoppingCartContext, ShoppingCartContextType } from '../../contexts/ShoppingCart';

describe('ProductCard', () => {
  const product: Product = {
    id: 1,
    title: 'Product 1',
    image: 'https://picsum.photos/200',
    price: 100,
    quantity: 0,
  };

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

  const renderProductCard = ({id, title, image, price, quantity}: Product, context: ShoppingCartContextType) => (
    <ShoppingCartContext.Provider value={context}>
      <ProductCard.Root key={id} className={'hover:scale-110'}>
        <ProductCard.Title title={title}/>
        <ProductCard.Picture src={image} alt={image} className={'h-32 w-32 object-contain'}/>
        <ProductCard.Price price={price}/>
        <ProductCard.Button quantity={quantity} id={id}/>
      </ProductCard.Root>
    </ShoppingCartContext.Provider>
  );

  it('should render the product name', () => {
    render((
      <ProductCard.Root key={product.id} className={'hover:scale-110'}>
        <ProductCard.Title title={product.title}/>
      </ProductCard.Root>
    ));
    const productName = screen.getByText(product.title);
    expect(productName).toBeInTheDocument();
  });

  it('should render the product image', () => {
    render((
      <ProductCard.Root key={product.id} className={'hover:scale-110'}>
        <ProductCard.Picture src={product.image} alt={product.title} className={'h-32 w-32 object-contain'}/>
      </ProductCard.Root>
    ));
    const productImage = screen.getByAltText(product.title);
    expect(productImage).toBeInTheDocument();
  });

  it('should render the product price', () => {
    render((
      <ProductCard.Root key={product.id}>
        <ProductCard.Price price={product.price}/>
      </ProductCard.Root>
    ));
    const productPrice = screen.getByTestId('CardProductPrice');
    expect(productPrice).toHaveTextContent(product.price.toFixed(2).toString());
  });

  it('should render the product button', () => {
    render((
      <ProductCard.Root key={product.id}>
        <ProductCard.Button quantity={product.quantity} id={product.id}/>
      </ProductCard.Root>
    ));
    const productButton = screen.getByText('Add to cart');
    expect(productButton).toBeInTheDocument();
  });

  it('should call increment function of ShoppingCart provider when ADD TO CART  button is clicked', async () => {
    const incrementQuantity = jest.fn();
    const quantity = 0;
    render(renderProductCard({...product, quantity}, {...contextValue, incrementQuantity}));
    const addToCartButton = screen.getByText(/Add to cart/i);
    await fireEvent.click(addToCartButton);
    expect(incrementQuantity).toBeCalledTimes(1);
  });

  it('should call increment function of ShoppingCart provider when increment button is clicked', async () => {
    const incrementQuantity = jest.fn();
    const quantity = 5;
    render(renderProductCard({...product, quantity}, {...contextValue, incrementQuantity}));
    const increaseButton = screen.getByTestId('increment-quantity');
    await fireEvent.click(increaseButton);
    expect(incrementQuantity).toBeCalledTimes(1);
  });

  it('should call decrement function of ShoppingCart provider when decrement button is clicked', async () => {
    const decrementQuantity = jest.fn();
    const quantity = 5;
    render(renderProductCard({...product, quantity}, {...contextValue, decrementQuantity}));
    const decreaseButton = screen.getByTestId('decrement-quantity');
    await fireEvent.click(decreaseButton);
    expect(decrementQuantity).toBeCalledTimes(1);
  });


});