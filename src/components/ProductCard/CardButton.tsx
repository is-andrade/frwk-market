import React from 'react';
import { useShoppingCart } from '../../contexts/ShoppingCart';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

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
          className={'rounded-lg bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-900'}
          onClick={() => incrementQuantity(id)}
        >
          Add to cart
        </button>
      ) : (
        <div className={'flex min-h-[40px] min-w-[100px] items-center justify-between'}>
          <button
            className={'rounded-lg font-bold text-white'}
            data-testid="decrement-quantity"
            onClick={() => {
              decrementQuantity(id);
            }}
          >
            <FaMinusSquare color={'green-700'} size={32} className={'text-green-700 hover:text-green-900'}/>
          </button>
          <div className={'flex justify-center'}>
            <span className={'w-full text-xl font-semibold'}>{quantity}</span>
          </div>
          <button
            className={'rounded-lg font-bold  text-white'}
            data-testid="increment-quantity"
            onClick={() => {
              incrementQuantity(id);
            }}
          >
            <FaPlusSquare color={'green-700'} size={32} className={'text-green-700 hover:text-green-900'}/>
          </button>
        </div>
      )}
    </>);
};

export default CardButton;