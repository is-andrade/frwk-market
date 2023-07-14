import React from 'react';

const CardPrice = ({price}: {price: number}) => {
  return (
    <span className={'text-xl font-semibold'}>${price}</span>
  )
}

export default CardPrice;