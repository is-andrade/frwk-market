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
          className={
            'bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg'
          }
          onClick={() => { incrementQuantity(id)}}
        >
          Add to cart
        </button>
      ) : (
        <div className={'flex min-h-[40px] min-w-[100px] items-center justify-between'}>
          <button
            className={
              ' text-white font-bold  rounded-lg'
            }
            onClick={() => { decrementQuantity(id)}}
          >
            <FaMinusSquare color={'green-700'} size={32} className={'text-green-700 hover:text-green-900'} />
          </button>
          <div className={'flex justify-center'}>
            <span className={'text-xl w-full font-semibold'}>{quantity}</span>
          </div>
          <button
            className={
              ' text-white font-bold  rounded-lg'
            }
            onClick={() => { incrementQuantity(id)}}
          >
            <FaPlusSquare color={'green-700'} size={32} className={'text-green-700 hover:text-green-900'} />
          </button>
        </div>
      )}
    </>);
}

export default CardButton;