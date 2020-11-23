import React from 'react';
import { CustomArrowProps } from 'react-slick';
import classNames from 'classnames';



import imgSliderNext from '../../assets/img/catalog-slider-next.svg';

type PropExtendType = {
    classNamesBtn?:string
}
const SlickArrowRight: React.FC<CustomArrowProps & PropExtendType> = ({ currentSlide, slideCount, classNamesBtn, ...props }) => {

  const count = React.useMemo(()=>slideCount ? slideCount - 1 : 0, [slideCount])
  return (
      <button
          {...props}
          id="next"
          type="button"
          className={classNames(classNamesBtn, { "disabled": currentSlide === count })}
          aria-disabled={currentSlide === count ? true : false}
      
      >
          <img src={window.location.origin+imgSliderNext} alt="img" />
      </button>
  )
};


export default React.memo(SlickArrowRight);
