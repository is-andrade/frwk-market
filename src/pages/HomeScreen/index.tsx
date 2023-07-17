import React from 'react';
import TopBar from '../../components/TopBar';
import ProductCard from '../../components/ProductCard';
import { useShoppingCart } from '../../contexts/ShoppingCart';

const HomeScreen = () => {
  const {cart, filter} = useShoppingCart();
  const filteredCart = cart.filter(({title}) => title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={'flex flex-col items-center justify-center'}>
      <TopBar/>
      <div className={'flex items-center justify-center pt-40 sm:pt-28'}>
        <h1 className={'text-4xl font-semibold'}>Products</h1>
      </div>
      <div className={'flex flex-wrap items-center justify-center gap-4 pt-8'}>
        {filteredCart.map(({title, price, quantity, image, id}) => (
          <ProductCard.Root key={id} className={'hover:scale-110'}>
            <ProductCard.Title title={title}/>
            <ProductCard.Picture src={image} alt={title} className={'h-32 w-32 object-contain'}/>
            <ProductCard.Price price={price}/>
            <ProductCard.Button quantity={quantity} id={id}/>
          </ProductCard.Root>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;