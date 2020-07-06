import React from 'react';

export const GifGridItem = ({ title, id, url }) => {
  return (
    <div className='card animate__animated animate__fadeInDown'>
      <img src={url} alt={title}></img>
    </div>
  );
};
