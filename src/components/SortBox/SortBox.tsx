import React from 'react';
import ButtonsDisplayList from './ButtonsDisplayList';
import TypeRoomsList from './TypeRoomsList';

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
            <TypeRoomsList/>
         
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