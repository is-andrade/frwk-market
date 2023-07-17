import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardPriceProps extends React.HTMLAttributes<HTMLSpanElement> {
  price: number;
}

const CardPrice = ({price, ...rest}: CardPriceProps) => {
  return (
    <span data-testid={'CardProductPrice'}
          className={twMerge('text-xl min-w-[100px] text-center font-semibold', rest.className)}>
      ${price.toFixed(2)}
    </span>
  );
};

export default CardPrice;