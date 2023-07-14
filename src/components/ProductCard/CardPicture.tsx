import React from 'react';

interface CardPictureProps extends React.ImgHTMLAttributes<HTMLImageElement>{
  src: string;
  alt: string;
}

const CardPicture = ({src, alt, ...rest}: CardPictureProps) => {
  return (
    <img src={src} alt={alt} {...rest} />
  )
}

export default CardPicture;