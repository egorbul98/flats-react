import React from 'react';
import { CustomArrowProps } from 'react-slick';
import classNames from 'classnames';



import imgSliderNext from '../../assets/img/catalog-slider-next.svg';

const SlickArrowRight: React.FC<CustomArrowProps> = ({ currentSlide, slideCount, ...props }) => {

  const count = React.useMemo(()=>slideCount ? slideCount - 1 : 0, [slideCount])

  return (
      <button
          {...props}
          id="next"
          type="button"
          className={classNames("catalog-complex__slider-next-btn", { "disabled": currentSlide === count })}
          aria-disabled={currentSlide === count ? true : false}
      
      >
          <img src={imgSliderNext} alt="img" />
      </button>
  )
};


export default React.memo(SlickArrowRight);
