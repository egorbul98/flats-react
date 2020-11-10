import React from 'react';
import ButtonsDisplayList from './ButtonsDisplayList';
import TypeRoomsList from './FilterTypeRoomsList';
import SortByCharacterList from './SortByCharacterList';

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
                <SortByCharacterList/>
                <ButtonsDisplayList className="sort-box__list-type" onClickDisplayButton={ onClickDisplayButton }/>
            </div>
          </div>
  
  
  
        </div>
  
  
      </div>
    </section>
  
    )
}

export default React.memo(SortBox);