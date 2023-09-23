import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <img className='d-block w-100 img-fluid' src='./banner1.jpg' alt='First slide' />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 img-fluid' src='./banner2.jpg' alt='Second slide' />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='./banner3.jpg' alt='Third slide' />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
