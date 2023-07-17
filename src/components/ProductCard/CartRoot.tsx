import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardRoot = ({children, ...rest}: CardRootProps) => {
  return (
    <article
      className={twMerge('cursor-pointer transform transition duration-300 rounded-xl gap-2 shadow-md p-4 flex flex-col items-center justify-center', rest.className)}>
      {children}
    </article>
  );
};

export default CardRoot;