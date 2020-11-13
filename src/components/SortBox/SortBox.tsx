import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers/rootReducer';
import ButtonsDisplayList from './ButtonsDisplayList';
import TypeRoomsList from './FilterTypeRoomsList';
import SortByCharacterList from './SortByCharacterList';

type PropsTypes = {
  activeItemDisplayBtn?: string,
  onClickDisplayButton?: (titleBtn: string) => void,
  onOpenMap?: () => void
}

const SortBox : React.FC < PropsTypes > = ({onClickDisplayButton, onOpenMap, activeItemDisplayBtn}) => {

  const { countComplexes, region, isLoading, filterItems } = useSelector(({ complexes, filter }:AppStateType) => {
    return {
      countComplexes: complexes.totalCount,
      isLoading: complexes.isLoading,
      region: filter.region,
      filterItems: filter.filterItems
    }
  })

  

    return (
      <section className="sort-box">
      <div className="catalog-wrapper">
        <div className="search-list">
          <span className="search-list__item">Поиск</span>
            <span className="search-list__item">{region === "SP" ? "Санкт-Петербург" : "Москва и МО"}</span>
            {filterItems.map((item) => {
              return <span key={item.type} className="search-list__item">{item.values.map((val)=>val.value).join(", ")}</span>
            })}
        </div>
  
        <div className="sort-box-header">
          <div className="sort-box__title-box">
            <h2 className="title">Новостройки {region === "SP" ? "Санкт-Петербурга" : "Москвы и МО"}</h2>
              <div className="count-complex__wrap">
                {isLoading ? "..." : <span className="count-complex">{countComplexes ? countComplexes : 0} жилых комплексов</span>}
              
            </div>
            </div>
            <TypeRoomsList/>
         
          <div className="sort-box__wrap">
            <h3 className="sort-box__text">Сортировать</h3>
            <div className="sort-box__inner">
                <SortByCharacterList onOpenMap={onOpenMap}/>
                <ButtonsDisplayList className="sort-box__list-type" activeItem={activeItemDisplayBtn} onClickDisplayButton={ onClickDisplayButton } onOpenMap={onOpenMap}/>
            </div>
          </div>
  
  
  
        </div>
  
  
      </div>
    </section>
  
    )
}

export default React.memo(SortBox);