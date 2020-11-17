import React from 'react';
import Slider from 'react-slick';
import SlickArrowLeft from './Slider/SlickArrowLeft';
import SlickArrowRight from './Slider/SlickArrowRight';

const settingsSlider = {
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <SlickArrowLeft classNamesBtn="advice-slider__slider-prev-btn" />,
  nextArrow: <SlickArrowRight classNamesBtn="advice-slider__slider-next-btn" />,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

type PropsTypes = {
  children?:React.ReactChild | React.ReactChildren | Array<React.ReactChild | React.ReactChildren>,
  className?:string,
}
const AdviceBoxSlider : React.FC < PropsTypes > = ({children, className}) => {

  return (
  <section className={"advice-box "+ className}>
      <div className="catalog-wrapper">
        <Slider {...settingsSlider} className="advice-slider">
          {children}
          
        </Slider>
    </div>
  </section>

  )
}

export default React.memo(AdviceBoxSlider);