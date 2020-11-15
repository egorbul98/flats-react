import React from 'react';
import Slider from 'react-slick';

import { ComplexeExtendedDetailType, ComplexeType } from '../../mainTypes';
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
    prevArrow: <SlickArrowLeft className="estate__slider-prevBtn slick-arrow"/>,
    nextArrow: <SlickArrowRight className="estate__slider-nextBtn slick-arrow"/>,
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
  
        <ul className="advantages__list">
  
          <li className="advantages__list-item advantages__list-item--sale">
            <svg width="13" height="14">
              <use xlinkHref="#icon-feature_sale"></use>
            </svg>
          </li>
  
          <li className="advantages__list-item advantages__list-item--deal">
            <svg width="14" height="14">
              <use xlinkHref="#icon-feature_deal"></use>
            </svg>
          </li>
  
          <li className="advantages__list-item advantages__list-item--gift">
            <svg width="13" height="10">
              <use xlinkHref="#icon-feature_gift"></use>
            </svg>
          </li>
  
          <li className="advantages__list-item advantages__list-item--decor">
            <svg width="12" height="17">
              <use xlinkHref="#icon-feature_decor"></use>
            </svg>
          </li>
  
          <li className="advantages__list-item advantages__list-item--conditions">
            <svg width="18" height="13">
              <use xlinkHref="#icon-bus"></use>
            </svg>
          </li>
  
        </ul>
        <div className="advantages__features">
          <ul className="advantages__features-list">
            <li className="advantages__features-item advantages__features-item--sale">
              <div className="advantages__features-item-box">
                <svg width="13" height="14">
                  <use xlinkHref="#icon-feature_sale"></use>
                </svg>
              </div>
              <span className="advantages__features-hint advantages__features-hint--sale">Скидка партнерам</span>
            </li>
            <li className="advantages__features-item advantages__features-item--sale">
              <div className="advantages__features-item-box">
                <svg width="13" height="14">
                  <use xlinkHref="#icon-feature_sale"></use>
                </svg>
              </div>
              <span className="advantages__features-hint advantages__features-hint--sale">Скидка&nbsp;иногородним
                покупателям&nbsp;200&nbsp;000&nbsp;руб</span>
            </li>
            <li className="advantages__features-item advantages__features-item--sale">
              <div className="advantages__features-item-box">
                <svg width="13" height="14">
                  <use xlinkHref="#icon-feature_sale"></use>
                </svg>
              </div>
              <span className="advantages__features-hint advantages__features-hint--sale">Скидка за повторную
                покупку</span>
            </li>
            <li className="advantages__features-item advantages__features-item--sale">
              <div className="advantages__features-item-box">
                <svg width="13" height="14">
                  <use xlinkHref="#icon-feature_sale"></use>
                </svg>
              </div>
              <span className="advantages__features-hint advantages__features-hint--sale">Скидка по рекомендации</span>
            </li>
            <li className="advantages__features-item advantages__features-item--deal">
              <div className="advantages__features-item-box">
                <svg width="14" height="14">
                  <use xlinkHref="#icon-feature_deal"></use>
                </svg>
              </div>
              <span className="advantages__features-hint advantages__features-hint--deal">Безопасная&nbsp;сделка</span>
            </li>
            <li className="advantages__features-item advantages__features-item--gift">
              <div className="advantages__features-item-box">
                <svg width="13" height="10">
                  <use xlinkHref="#icon-feature_gift"></use>
                </svg>
              </div>
              <span
                className="advantages__features-hint advantages__features-hint--gift">Приемка&nbsp;в&nbsp;подарок</span>
            </li>
            <li className="advantages__features-item advantages__features-item--decor">
              <div className="advantages__features-item-box">
                <svg width="12" height="17">
                  <use xlinkHref="#icon-feature_decor"></use>
                </svg>
              </div>
              <span className="advantages__features-hint advantages__features-hint--decor">Сертификат&nbsp;на&nbsp;отделку</span>
            </li>
            <li className="advantages__features-item advantages__features-item--conditions">
              <div className="advantages__features-item-box">
                <svg width="18" height="13">
                  <use xlinkHref="#icon-bus"></use>
                </svg>
              </div>
              <span className="advantages__features-hint advantages__features-hint--gift">Специальные&nbsp;условия
                для&nbsp;иногородних</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

    )
}

export default React.memo(ComplexSliderDetail);

   