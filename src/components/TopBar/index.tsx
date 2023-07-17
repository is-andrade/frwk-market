import React, { useMemo } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useAuth } from '../../contexts/Auth';
import { useShoppingCart } from '../../contexts/ShoppingCart';
import ShoppingCart from '../ShoppingCart';

const TopBar = () => {
  const {logout} = useAuth();
  const {showCart, cart, setFilter} = useShoppingCart();

  const productsQuantity = useMemo(() => {
      return cart.reduce((acc, curr) => acc + curr.quantity, 0);
    }
    , [cart]);

  return (
    <div
      className={'fixed top-0 z-50 flex w-full flex-wrap items-center justify-between bg-[#5f3473] p-6 shadow-md sm:flex-nowrap'}>
      <ShoppingCart/>
      <div className={'mb-4  flex w-full justify-start sm:mb-0 sm:w-auto'}>
        <img src='images/framework_logo.webp' alt="Framework" className={'h-8 min-w-[219px]'}/>
      </div>

      <div className={'flex w-full gap-4'}>
        <div className={'flex w-full justify-center px-0 sm:pl-8'}>
          <input type="text" onChange={(event) => {
            setFilter(event.target.value);
          }} placeholder={'Search'} className={'h-8 w-full rounded-md px-4 outline-none'}/>
        </div>
        <div className={'flex justify-end'}>
          <div
            onClick={showCart}
            className={'relative left-[39px] top-[-9px] flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white'}>
            {productsQuantity}
          </div>
          <button className="pr-2" onClick={showCart} aria-label="logout">
            <FaShoppingCart color={'white'} className={'h-8 w-8'}/>
          </button>
          <button className="px-2" onClick={logout} aria-label="logout">
            <MdLogout color={'white'} className={'h-8 w-8'}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;