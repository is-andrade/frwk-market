import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardPriceProps extends React.HTMLAttributes<HTMLSpanElement>{
  price: number;
}

const CardPrice = ({price, ...rest}: CardPriceProps) => {
  return (
    <span className={twMerge('text-xl min-w-[100px] text-center font-semibold', rest.className)}>
      ${price}
    </span>
  )
}

export default CardPrice;