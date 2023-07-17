import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

const CardTitle = ({title, ...rest}: CardTitleProps) => {
  return (
    <h2 className={twMerge('font-semibold text-2xl', rest.className)}>{title}</h2>
  );
};

export default CardTitle;