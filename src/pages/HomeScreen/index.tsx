import React from 'react';
import TopBar from '../../components/TopBar';
import ProductCard from '../../components/ProductCard';
import { useShoppingCart } from '../../contexts/ShoppingCart';

const HomeScreen = () => {
  const {cart} = useShoppingCart();

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <TopBar/>
      <div className={"flex items-center justify-center pt-24"}>
        <h1 className={"text-4xl font-semibold"}>Products</h1>
      </div>
      <div className={"flex flex-wrap gap-4 items-center justify-center pt-8"}>
        {cart.map(({title, price, quantity, image,id}) => (
          <ProductCard.Root key={id}>
            <ProductCard.Title title={title}/>
            <ProductCard.Picture src={image} alt={title} className={"object-contain h-32 w-32"}/>
            <ProductCard.Price price={price}/>
            <ProductCard.Button quantity={quantity} id={id}/>
          </ProductCard.Root>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;