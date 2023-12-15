import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';

function CustomSlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: false,
  };

  return (
    <div className="w-screen relative  h-screen hidden md:block ">
      <Slider {...settings}>
        <div className="slide bg-gray-300 text-center h-40 flex justify-center items-center text-lg font-bold h-screen"><Page1 /></div>
        <div className="slide bg-gray-400 text-center h-40 flex justify-center items-center text-lg font-bold h-screen"><Page2 /></div>
        <div className="slide bg-gray-500 text-center h-40 flex justify-center items-center text-lg font-bold h-screen"><Page3 /></div>
        <div className="slide bg-gray-600 text-center h-40 flex justify-center items-center text-lg font-bold h-screen"><Page4 /></div>
        <div className="slide bg-gray-700 text-center h-40 flex justify-center items-center text-lg font-bold h-screen"><Page5 /></div>
        <div className="slide bg-gray-800 text-center h-40 flex justify-center items-center text-lg font-bold h-screen"><Page6 /></div>
        <div className="slide bg-gray-900 text-center h-40 flex justify-center items-center text-lg font-bold h-screen"><Page7 /></div>
        
      </Slider>
      <style>
        {`
          .slick-dots {
            position: absolute;
            bottom: 20px; // Adjust the distance from the bottom as needed
            list-style: none;
            text-align: center;
            display: flex;
            justify-content: center;
            gap: 8px; // Adjust the spacing between dots as needed
          }

          .slick-dots li {
            display: inline-block;
          }

          .slick-dots li button {
            width: 10px; // Adjust the size of the dots as needed
            height: 10px; // Adjust the size of the dots as needed
            background: #333; // Adjust the color of the dots as needed
            border: none;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>

    </div>
  );
}

export default CustomSlideShow;

