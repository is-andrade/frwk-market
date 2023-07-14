import React from 'react';
import { useShoppingCart } from '../../contexts/ShoppingCart';

interface CardButtonProps {
  id: number;
  quantity: number;
}

const CardButton = ({quantity, id}: CardButtonProps) => {

  const {decrementQuantity, incrementQuantity} = useShoppingCart();


  return (
    <>
      {quantity === 0 ? (
        <button
          className={
            'bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg'
          }
          onClick={() => { incrementQuantity(id)}}
        >
          Add to cart
        </button>
      ) : (
        <div className={'flex w-full items-center justify-between'}>
          <button
            className={
              'bg-green-700 hover:bg-green-900 text-white font-bold py-1 px-3 rounded-lg text-2xl'
            }
            onClick={() => { decrementQuantity(id)}}
          >
            -
          </button>
          <div className={'flex justify-center'}>
            <span className={'text-xl w-full font-semibold'}>{quantity}</span>
          </div>
          <button
            className={
              'bg-green-700 hover:bg-green-900 text-white font-bold h-12 rounded-lg text-2xl'
            }
            onClick={() => { incrementQuantity(id)}}
          >
            +
          </button>
        </div>
      )}
    </>);
}

export default CardButton;