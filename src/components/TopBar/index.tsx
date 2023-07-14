import React from 'react';
import image from '../../assets/images/framework_logo.webp';
import { FaShoppingCart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useAuth } from '../../contexts/Auth';
import { useShoppingCart } from '../../contexts/ShoppingCart';
import ShoppingCart from '../ShoppingCart';

const TopBar = () => {
  const {logout} = useAuth();
  const {showCart, isCartVisible} = useShoppingCart();

  return (
    <div className={"w-full bg-[#5f3473] h-16 flex justify-between items-center p-6 fixed top-0 z-50 shadow-md"}>
      <ShoppingCart  />
      <img src={image} alt="Framework" className={"h-8"}/>
      <div className={"flex gap-4"}>
          <button className="px-4" onClick={showCart} aria-label="logout">
            <FaShoppingCart color={"white"} className={"h-8 w-8"}/>
          </button>
        <button className="px-4" onClick={logout} aria-label="logout">
          <MdLogout color={"white"} className={"h-8 w-8"}/>
        </button>
      </div>
    </div>
  );
}

export default TopBar;