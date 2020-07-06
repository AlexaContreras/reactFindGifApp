import React, { useState } from 'react';

export const GifGridItem = ({ title, id, url }) => {
  const [state, setstate] = useState('Cargando');

  const handleOnload = () => {
    setstate('');
  };

  return (
    <div className='card animate__animated animate__fadeInDown'>
      <img
        className={state && 'imgHidden'}
        onLoad={handleOnload}
        src={url}
        alt={title}
      />
      {state && (
        <div className='loading'>
          <i className='fa fa-circle-notch fa-spin fa-3x' />
        </div>
      )}
    </div>
  );
};
