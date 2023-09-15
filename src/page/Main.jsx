import React from 'react';
import Banner from '../components/Banner';
import Product from '../components/Product/Product';

function Main() {
  return (
    <div className='wrapper'>
      <div className='contentWrapper'>
        <Banner />

        <Product />
        <br></br>
      </div>
    </div>
  );
}

export default Main;
