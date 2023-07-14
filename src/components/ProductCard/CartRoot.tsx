import React from 'react';
import { Product } from '../../common/types';

interface CardRootProps {
  children: React.ReactNode;
}

const CardRoot = ({children}:CardRootProps) => {
  return (
    <div className="cursor-pointer hover:scale-110 transform transition duration-300 rounded-xl gap-2 shadow-md p-4 flex flex-col items-center justify-center">
      {children}
    </div>
  )
}

export default CardRoot;