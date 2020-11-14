import React from 'react';

type PropsTypes = {
  
}

const HeaderDeatailPage : React.FC < PropsTypes > = ({}) => {

  return (
    <div>
      <header className="header main-header" id="main-header">
      <div className="main-header__wrapper">
        <img className="main-header__logo logo" src="img/logo.svg" width="80" height="46" alt="Логотип"/>
        <nav className="main-nav scrollLink">
          <button className="main-nav__toggle" type="button"><span className="visually-hidden">Открыть меню</span></button>
          <div className="main-nav__wrapper">
            <ul className="main-nav__list main-nav--nojs">
              <li className="main-nav__item">
                <a href="#flats" className="main-nav__link">Подобрать квартиру</a>
              </li>
              <li className="main-nav__item">
                <a href="#description" className="main-nav__link">Характеристики комплекса</a>
              </li>
              <li className="main-nav__item">
                <a href="#feedback" className="main-nav__link">Отзывы</a>
              </li>
              <li className="main-nav__item">
                <a href="#blog" className="main-nav__link">Авторское описание</a>
              </li>
              <li className="main-nav__item">
                <a href="#documents" className="main-nav__link">Документы</a>
              </li>
              <li className="main-nav__item">
                <a href="#credit" className="main-nav__link">Ипотека</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    
    <section className="estate">
    <div className="estate__wrapper">
      <h1 className="estate__title visually-hidden">Новостройки Санкт-Петербурга</h1>
      <div className="estate__slider-box">
  
        <div className="estate__slider-item">
          {/* <picture>
            <source type="image/webp" srcset="img/devSlider-img1.webp">
  
            <img className="estate__slider-img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="360" height="220"/>
          </picture> */}
          <h2 className="estate__slider-title">ЖК «Северные высоты»</h2>
          <div className="estate__description-box">
            <address className="estate__address">
              <p className="estate__address-metro">Беговая, 21 мин. пешком</p>
              <p className="estate__address-street">Приморский район, Мебельная улица, 19к2</p>
            </address>
            <div className="estate__info">
              <p className="estate__info-name">ООО «Инвест-Строй»</p>
              <span className="estate__info-divider"></span>
              <p className="estate__info-type">Под ключ</p>
              <a href="tel:8(800)1234556" className="estate__info-phone"><b>8 (800) 123 45 56</b></a>
            </div>
          </div>
        </div>
        <div className="estate__slider-item">
          {/* <picture>
            <source type="image/webp" srcset="img/devSlider-img1.webp">
  
            <img className="estate__slider-img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="360" height="220"/>
          </picture> */}
          <h2 className="estate__slider-title">ЖК «Северные высоты»</h2>
          <div className="estate__description-box">
            <address className="estate__address">
              <p className="estate__address-metro">Беговая, 21 мин. пешком</p>
              <p className="estate__address-street">Приморский район, Мебельная улица, 19к2</p>
            </address>
            <div className="estate__info">
              <p className="estate__info-name">ООО «Инвест-Строй»</p>
              <span className="estate__info-divider"></span>
              <p className="estate__info-type">Под ключ</p>
              <a href="tel:8(800)1234556" className="estate__info-phone"><b>8 (800) 123 45 56</b></a>
            </div>
          </div>
        </div>
        <div className="estate__slider-item">
          {/* <picture>
            <source type="image/webp" srcset="img/devSlider-img1.webp">
  
            <img className="estate__slider-img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="360" height="220"/>
          </picture> */}
          <h2 className="estate__slider-title">ЖК «Северные высоты»</h2>
          <div className="estate__description-box">
            <address className="estate__address">
              <p className="estate__address-metro">Беговая, 21 мин. пешком</p>
              <p className="estate__address-street">Приморский район, Мебельная улица, 19к2</p>
            </address>
            <div className="estate__info">
              <p className="estate__info-name">ООО «Инвест-Строй»</p>
              <span className="estate__info-divider"></span>
              <p className="estate__info-type">Под ключ</p>
              <a href="tel:8(800)1234556" className="estate__info-phone"><b>8 (800) 123 45 56</b></a>
            </div>
          </div>
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
        <a href="#" className="estate__btn estate__btn-air">
          <span className="estate__btn-icon estate__btn-icon--drone">
            <svg width="18" height="14">
              <use xlinkHref="#icon-droneBtn"></use>
            </svg>
          </span>
          Аэропанорама
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

    </div>  
    )
}

export default React.memo(HeaderDeatailPage);

   