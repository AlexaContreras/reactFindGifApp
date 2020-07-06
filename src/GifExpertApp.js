import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);

  return (
    <>
      <h2>
        <img className='logo' src='images/gif.png' alt='logo'></img>
        GifExpertApp
      </h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <div className='gridsContainer'>
        <ol className='olGridsContainer'>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </div>
    </>
  );
};
