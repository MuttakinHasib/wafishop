import React, { useState } from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';

const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  lazy: true,
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 1000,
  spaceBetween: 0,
  effect: 'slide',
  autoplay: true,
};

const Slider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.9;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='/assets/slider-1.jpg' alt='image1'></img>
        </div>
      </div>
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='/assets/slider-2.jpg' alt='image1'></img>
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
