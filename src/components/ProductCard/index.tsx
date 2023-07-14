import React from 'react';
import { Product } from '../../common/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
  const {title, description, price, image} = product;
  return (
    <div className="cursor-pointer hover:scale-110 transform transition duration-300 rounded-xl gap-2 shadow-md p-4 flex flex-col items-center ma justify-center">
      <h2 className={'font-semibold text-2xl'}>{title}</h2>
       <img src={image} alt={title} className={"object-contain h-32 w-32"} />
      <p className={"text-xs"}>{description}</p>
      <p>U$ {price}</p>
    </div>
  )
}

export default ProductCard;