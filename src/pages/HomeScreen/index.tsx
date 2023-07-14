import React from 'react';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../common/types';

// apple, pear, banana, pineapple and mango.
const products: Product[] = [
  {
    title: 'Apple',
    description: 'A red apple',
    price: 1.99,
    image: 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg',
  },
  {
    title: 'Pear',
    description: 'A green pear',
    price: 2.99,
    image: 'https://i.pinimg.com/736x/af/bf/64/afbf6429e91a83229edea43375a58312.jpg',
  },
  {
    title: 'Banana',
    description: 'A yellow banana',
    price: 3.99,
    image: 'https://i.pinimg.com/originals/b8/39/3c/b8393ccd0f271772cc7d4796857637a9.jpg',
  },
  {
    title: 'Pineapple',
    description: 'A yellow pineapple',
    price: 4.99,
    image: 'https://i.pinimg.com/736x/ee/ce/bd/eecebd862d409d643026722f772c3a81.jpg',
  },
  {
    title: 'Mango',
    description: 'A yellow mango',
    price: 5.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSYL9eFqAQ1c2L1cs_unuhOdaTM_wL6UoXSwuRclj6Z0w2bFkUd91cKHuiWQSLKnB-cg&usqp=CAU',
  }
  ]

const HomeScreen = () => {

  return (
    <div className={"flex flex-wrap gap-4 items-center ma justify-center"}>
      {products.map((product) => (
        <ProductCard   key={product.title} product={product} />
      ))}
    </div>
  );
}

export default HomeScreen;