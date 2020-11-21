import React from 'react';
import Slider from 'react-slick';

import { ComplexeExtendedDetailType, ComplexeType } from '../../mainTypes';
import AdvantageList from '../Advantages/AdvantageList';
import SlickArrowLeft from '../Slider/SlickArrowLeft';
import SlickArrowRight from '../Slider/SlickArrowRight';

type PropsTypeSlide = {
  srcImage: string
}

const SlideItemComplex: React.FC<PropsTypeSlide> = ({srcImage}) => {
  return (
    <div className="estate__slider-item">
      <img className="estate__slider-img" src={srcImage} alt="фотография ЖК" width="360" height="220"/>
    </div>
  )
}

const ComplexSliderDetail : React.FC < ComplexeType | ComplexeType & ComplexeExtendedDetailType> = ({...complex}) => {
  const settingsSlider = { //настройки слайдера
    arrows: true,
    prevArrow: <SlickArrowLeft classNamesBtn="catalog-complex__slider-prev-btn"/>,
    nextArrow: <SlickArrowRight classNamesBtn="catalog-complex__slider-next-btn"/>,
  }
  
  return (
    <section className="estate">
    <div className="estate__wrapper">
        <div className="estate__slider-box">
        <div className="estate__slider-box-wrapper">
          <Slider className="catalog-complex__slider" {...settingsSlider}>
            {complex.images.length && complex.images.map((img, index) => {
              return <SlideItemComplex key={index+"_slide"} srcImage={window.location.origin +img}/>
              })}
          </Slider>
          <h2 className="estate__slider-title">{complex.name}</h2>
        </div>
        <div className="estate__description-box">
          <address className="estate__address">
            <p className="estate__address-metro">{complex.metro}, {complex.metroDistance} мин. пешком</p>
            <p className="estate__address-street">{complex.area}, {complex.address}</p>
          </address>
          <div className="estate__info">
            <p className="estate__info-name">{complex.developer}</p>
            
            </div>
            <a href={`tel:${complex.tel}`} className="estate__info-phone"><b>{complex.tel}</b></a>
        </div>
      </div>
      
        
        <div className="estate__btn-box scrollLink">
        <a href="#videoReview" className="estate__btn estate__btn-review">
          <span className="estate__btn-icon estate__btn-icon--play">
            <svg width="13" height="14">
              <use xlinkHref="#icon-playBtn"></use>
            </svg>
          </span>
          Видеообзор
        </a>
        </div>
        
      <div className="estate__advantages advantages">
          <div className="advantages__features">
            <AdvantageList itemNames={complex.advantages} classNameItem="advantages__features-item" classNameItemTooltip="advantages__features-hint" classNameWrap="advantages__features-list"
            classNameIconWrap="advantages__features-item-box"/>
          </div>
      </div>
    </div>
  </section>

    )
}

export default React.memo(ComplexSliderDetail);

   