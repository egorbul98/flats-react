import React from 'react';

type PropsTypes = {}

const Footer : React.FC < PropsTypes > = ({}) => {

    return (
        <footer className="catalog-footer">
    <div className="catalog-wrapper">
      <div className="catalog-footer__wrap">
        <div className="catalog-footer__item buildings">
          <h4 className="catalog-footer__item-title">Новостройки</h4>
          <div className="buildings__item catalog-footer__text"><a href="#">В Санкт-Петербурге</a></div>
          <div className="buildings__item catalog-footer__text"><a href="#">В Ленинградской области</a></div>
          <div className="buildings__item catalog-footer__text"><a href="#">В Москве</a></div>
          <div className="buildings__item catalog-footer__text"><a href="#">В Московской области</a></div>
          <div className="buildings__show-map catalog-footer__text"><a href="">Новостройки на карте</a></div>
        </div>
        <div className="catalog-footer__item popular">
          <h4 className="catalog-footer__item-title">Популярное</h4>
          <div className="popular__item catalog-footer__text"><a href="#">До 3 миллионов</a></div>
          <div className="popular__item catalog-footer__text"><a href="#">До 4 миллионов</a></div>
          <div className="popular__item catalog-footer__text"><a href="#">До 5 миллионов</a></div>
        </div>
        <div className="catalog-footer__item different">
          <div className="different__sales catalog-footer__text"><a href="">Старты продаж новостроек</a></div>
          <div className="different__other other">
            <div className="other__item catalog-footer__text other__video"><a href="#">Видеобзоры ЖК</a></div>
            <div className="other__item catalog-footer__text other__item--width"><a href="#">Новости</a></div>
            <div className="other__item catalog-footer__text other__item--width"><a href="#">Статьи</a></div>
          </div>

        </div>
        <div className="catalog-footer__item social">
          <form action="" className="form-search">
            <div className="form-search__field">
              <input readOnly type="search" className="form-search__input" placeholder="Поиск по базе"/>
              <button type='submit' className="btn-search"><img src="img/icon-search.svg" alt=""/></button>
            </div>
          </form>

          <div className="social__site">PRONovostroyki.com</div>

          <div className="social__list">
            <div className="social__item"><a href="#"><img className='lazy' data-src="img/logo_vk.png"
                  src="img/content-item-img.png" alt=""/></a></div>
            <div className="social__item"><a href="#"><img className='lazy' data-src="img/logo_youtube.png"
                  src="img/content-item-img.png" alt=""/></a></div>
            <div className="social__item"><a href="#"><img className='lazy' data-src="img/logo_instagram.png"
                  src="img/content-item-img.png" alt=""/></a></div>
          </div>

        </div>
      </div>
    </div>
  </footer>
)
}

export default Footer;