import React from 'react';
import ButtonsDisplayList from './ButtonsDisplayList';

type PropsTypes = {
  onClickDisplayButton?: (titleBtn: string) => void;
}

const SortBox : React.FC < PropsTypes > = ({onClickDisplayButton}) => {

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
                <ButtonsDisplayList className="sort-box__list-type" onClickDisplayButton={ onClickDisplayButton }/>
            </div>
          </div>
  
  
  
        </div>
  
  
      </div>
    </section>
  
    )
}

export default React.memo(SortBox);