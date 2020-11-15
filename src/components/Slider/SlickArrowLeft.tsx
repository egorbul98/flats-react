import React from 'react';
import { CustomArrowProps } from 'react-slick';
import classNames from 'classnames';


import imgSliderPrev from '../../assets/img/catalog-slider-prev.svg';
const SlickArrowLeft:React.FC<CustomArrowProps> = ({ currentSlide, slideCount, ...props }) => (
  <button 
      {...props} 
      id="prev" 
      type="button" 
      className={classNames("catalog-complex__slider-prev-btn", {"disabled" : currentSlide === 0})}
      aria-disabled={currentSlide === 0 ? true : false}
  >
      <img src={imgSliderPrev} alt="img"/>
  </button>
);



export default React.memo(SlickArrowLeft);
