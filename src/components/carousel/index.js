import React from 'react'
import './index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carouse = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows:true
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='main-carousel-container'>
        <h1 className='carousel-heading'>Our Services</h1>
        <div className="slider-container">
      <Slider {...settings}>
        <div className='img-carousel-container1'>
          <h3>Arabian Ranches</h3>
        </div>
        <div className='img-carousel-container2'>
          <h3>Arabian Ranches II</h3>
        </div>
        <div className='img-carousel-container3'>
          <h3>Dubai Downtown</h3>
        </div>
        <div className='img-carousel-container4'>
          <h3>Dubai Hills Estate</h3>
        </div>
        <div className='img-carousel-container5'>
          <h3>Dubai Marina</h3>
        </div>
        <div className='img-carousel-container6'>
          <h3>Estate Living</h3>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Carouse;
