import React from 'react';
import { useShoppingCart } from '../../contexts/ShoppingCart';
import ProductCard from '../ProductCard';
import { FaShoppingCart } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Decimal from 'decimal.js';

interface ShoppingCartProps extends React.ImgHTMLAttributes<HTMLDivElement> {
}

const ShoppingCart = ({...rest}: ShoppingCartProps) => {
  const {cart, hideCart, isCartVisible} = useShoppingCart()

  const filteredCart = cart.filter(item => item.quantity);

  return (
    <div>
      {isCartVisible &&
      <div onClick={hideCart} className={"h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-40"}/>}
      <div
        className={`${isCartVisible ? "translate-x-0 " : "translate-x-full"} ease-in-out duration-300 overflow-y-scroll absolute top-0 right-0 h-screen shadow-lg bg-white lg:w-2/3  xl:w-1/2 w-full z-50 items-start justify-between p-8 flex flex-col`}>
        <div className={"flex flex-col items-center items-start w-full"}>
          <div className={"flex justify-between items-center mb-4 w-full"}>
            <div className={"flex justify-start w-full "}>
              <FaShoppingCart color={"black"} className={"h-8 w-8"}/>
              <p className={"font-bold text-2xl ml-2"}>Shopping Cart</p>
            </div>

            <button onClick={hideCart}>
              <MdClose color={"black"} className={"h-8 w-8"}/>
            </button>
          </div>

          {filteredCart.length === 0 ? (
            <p className={"text-center text-2xl "}>
              Your cart is empty
            </p>
          ) : (<div className={"flex flex-col gap-4 w-full"}>
            {filteredCart.map(({title, price, quantity, image, id}) => (
              <ProductCard.Root key={id}>
                <div className={"flex flex-col sm:flex-row w-full gap-2 justify-between items-center"}>
                  <div className={"flex w-full gap-2 items-center"}>
                    <ProductCard.Picture src={image} alt={title} className={"object-contains w-8"}/>
                    <ProductCard.Title className={'text-xl'} title={title}/>
                  </div>
                  <div className={"w-full flex flex-row justify-between md:justify-end gap-2 items-center"}>
                    <ProductCard.Button quantity={quantity} id={id}/>
                    <ProductCard.Price className={"text-right text-l"} price={new Decimal(price).mul(quantity).toNumber()}/>
                  </div>
                </div>
              </ProductCard.Root>
            ))}
          </div>)}
        </div>

        <div className={"flex flex-col gap-4 w-full"}>
          <div className={"flex flex-row justify-between items-center"}>
            <p className={"font-bold text-2xl"}>Total</p>
            <p
              className={"font-bold text-2xl"}>${cart.reduce((acc, item) => acc.plus(new Decimal(item.price).mul(item.quantity)), new Decimal(0)).toNumber()}</p>
          </div>
          <button className={"bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg"}>
            Finalize Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default ShoppingCart;