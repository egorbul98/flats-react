import React from 'react';

type PropsTypes = {}

const SortBox : React.FC < PropsTypes > = ({}) => {

    return (
      <section className="sort-box">
      <div className="catalog-wrapper">
        <div className="search-list">
          <span className="search-list__item">Поиск</span>
          <span className="search-list__item">Санкт-Петербург</span>
          <span className="search-list__item">Правобережная</span>
          <span className="search-list__item">Улица Дыбенко</span>
        </div>
  
        <div className="sort-box-header">
          <div className="sort-box__title-box">
            <h2 className="title">Новостройки Санкт-Петербурга</h2>
            <div className="count-complex__wrap">
              <span className="count-complex">47</span>жилых комплексов
            </div>
          </div>
          <div className="list-type-flats">
            <button type="button" className="list-type-flats__btn oneRoom pink__btn" data-room='1 ккв'><span
                className="text-large">1-комнатная
                кв.</span><span className="text-small">1 ккв</span></button>
            <button type="button" className="list-type-flats__btn twoRoom pink__btn" data-room='2 ккв'><span
                className="text-large">2-комнатная
                кв.</span><span className="text-small">2 ккв</span></button>
            <button type="button" className="list-type-flats__btn threeRoom pink__btn" data-room='3 ккв'><span
                className="text-large">3-комнатная
                кв.</span><span className="text-small">3 ккв</span></button>
            <button type="button" className="list-type-flats__btn studio pink__btn" data-room='Студия'><span
                className="text-large">Студия</span><span className="text-small">Студия</span></button>
          </div>
  
          <div className="sort-box__wrap">
            <h3 className="sort-box__text">Сортировать</h3>
            <div className="sort-box__inner">
              <div className="sort-box__list-character list-character">
                <button type='button'
                  className="list-character__btn list-character__btn-sort-by-recomend list-character__btn--active "><img
                    src="img/bookmark-star.svg" alt=""/>Рекомендуемые</button>
                <button type='button' className="list-character__btn list-character__btn-sort-by-coast"><img
                    src="img/coin-stack.svg" alt=""/>По
                  цене</button>
                <button type='button' className="list-character__btn list-character__btn-sort-by-coast-square"><img
                    src="img/coin-stack.svg" alt=""/>По цене за
                  м2</button>
                <button type='button' className="list-character__btn list-character__btn-sort-by-deadline"><img
                    src="img/clock.svg" alt=""/>По сроку
                  сдачи</button>
                <button type='button' className="list-character__btn list-character__btn-map"><img
                    src="img/placeholder-red.svg" alt=""/>На карте</button>
              </div>
              <div className="sort-box__list-type list-type">
                <button type='button' className="list-type__btn list-type__btn--active list-type__btn-tile">
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M0,0H5.469V5.469H0V0ZM6.531,0H12V5.469H6.531V0ZM0,6.531H5.469V12H0V6.531Zm6.531,0H12V12H6.531V6.531Z" />
                  </svg>
                  Плиткой</button>
                <button type='button' className="list-type__btn list-type__btn-list"><svg width="12" height="12"
                    viewBox="0 0 12 12">
                    <path d="M0,0H12V2.406H0V0ZM0,4.813H12V7.188H0V4.813ZM0,9.594H12V12H0V9.594Z" />
                  </svg>
                  Списком</button>
                <button type='button' className="list-type__btn list-type__btn-map">
                  <svg width="15" height="15">
                    <use xlinkHref="#icon-maps"></use>
                  </svg>На карте</button>
              </div>
            </div>
          </div>
  
  
  
        </div>
  
  
      </div>
    </section>
  
    )
}

export default SortBox;