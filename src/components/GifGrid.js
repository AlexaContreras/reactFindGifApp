import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  // useFetchGifs es un custome hook en la carpeta helpers

  return (
    <>
      <h3 className='h3cardGrid animate__animated animate__fadeIn'>
        {category}
      </h3>
      {loading && <p>Cargando...</p>}
      <div className='cardGrid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
