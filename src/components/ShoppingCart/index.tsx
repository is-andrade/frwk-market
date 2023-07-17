import React from 'react';
import { useShoppingCart } from '../../contexts/ShoppingCart';
import ProductCard from '../ProductCard';
import { FaShoppingCart } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Decimal from 'decimal.js';
import jsPDF from 'jspdf';

const ShoppingCart = () => {
  const {cart, hideCart, isCartVisible, cleanCart} = useShoppingCart();
  const filteredCart = cart.filter(item => item.quantity);

  const handleFinalizeOrder = () => {
    const doc = new jsPDF();
    doc.text('Shopping Cart', 10, 10);
    filteredCart.forEach(({ title, price, quantity }, index) => {
      const y = 20 + index * 10;
      doc.text(`${title} x ${quantity} - $${new Decimal(price).mul(quantity).toFixed(2)}`, 10, y);
    });
    const total = cart.reduce((acc, item) => acc.plus(new Decimal(item.price).mul(item.quantity)), new Decimal(0));
    doc.text(`Total: $${total.toFixed(2)}`, 10, filteredCart.length * 10 + 30);
    doc.save('order-receipt.pdf');
    hideCart();
    cleanCart();
  };

  return (
    <div>
      {isCartVisible &&
      <div onClick={hideCart} className={'fixed left-0 top-0 z-40 h-screen w-screen bg-black opacity-50'}/>}

      <div
        className={`${isCartVisible ? 'translate-x-0 ' : 'translate-x-full'} absolute right-0 top-0 z-50 flex h-screen w-full flex-col items-start justify-between  overflow-y-scroll bg-white p-8 shadow-lg duration-300 ease-in-out md:w-2/3 xl:w-1/2`}>
        <div className={'flex w-full flex-col items-center'}>
          <div className={'mb-4 flex w-full items-center justify-between'}>
            <div className={'flex w-full justify-start '}>
              <FaShoppingCart color={'black'} className={'h-8 w-8'}/>
              <p className={'ml-2 text-2xl font-bold'}>
                Shopping Cart
              </p>
            </div>

            <button onClick={hideCart}>
              <MdClose color={'black'} className={'h-8 w-8'}/>
            </button>
          </div>

          {filteredCart.length > 0 && (<div className={'flex w-full flex-col gap-4'}>
            {filteredCart.map(({title, price, quantity, image, id}) => (
              <ProductCard.Root key={id}>
                <div className={'flex w-full flex-col items-center justify-between gap-2 sm:flex-row'}>
                  <div className={'flex w-full items-center gap-2'}>
                    <ProductCard.Picture src={image} alt={title} className={'w-8 object-contain'}/>
                    <ProductCard.Title className={'text-xl'} title={title}/>
                  </div>
                  <div className={'flex w-full flex-row items-center justify-between gap-2 sm:justify-end'}>
                    <ProductCard.Button quantity={quantity} id={id}/>
                    <ProductCard.Price className={'text-l text-right'}
                                       price={new Decimal(price).mul(quantity).toNumber()}/>
                  </div>
                </div>
              </ProductCard.Root>
            ))}
          </div>)}
        </div>

        {filteredCart.length === 0 && (
          <div className={'flex h-full w-full items-center justify-center'}>
            <p className={'text-2xl'}>
              Your cart is empty
            </p>
          </div>
        )}

        <div className={'flex w-full flex-col gap-4'}>
          <div className={'flex flex-row items-center justify-between'}>
            <p className={'text-2xl font-bold'}>Total</p>
            <p
              className={'text-2xl font-bold'}>${cart.reduce((acc, item) => acc.plus(new Decimal(item.price).mul(item.quantity)), new Decimal(0)).toFixed(2)}</p>
          </div>
          <button disabled={filteredCart.length === 0} onClick={handleFinalizeOrder} className={'rounded-lg bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-900 disabled:bg-gray-500'}>
            Finalize Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default ShoppingCart;