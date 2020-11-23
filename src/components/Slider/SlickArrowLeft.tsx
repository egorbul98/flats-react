import React from 'react';
import { CustomArrowProps } from 'react-slick';
import classNames from 'classnames';


import imgSliderPrev from '../../assets/img/catalog-slider-prev.svg';
type PropExtendType = {
  classNamesBtn?:string
}

const SlickArrowLeft:React.FC<CustomArrowProps & PropExtendType> = ({ currentSlide, slideCount, classNamesBtn, ...props }) => (
  <button 
      {...props} 
      id="prev" 
      type="button" 
      className={classNames(classNamesBtn, {"disabled" : currentSlide === 0})}
      aria-disabled={currentSlide === 0 ? true : false}
  >
      <img src={window.location.origin+imgSliderPrev} alt="img"/>
  </button>
);



export default React.memo(SlickArrowLeft);
