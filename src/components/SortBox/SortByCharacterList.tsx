import React, { useCallback } from 'react';
import ButtonsDisplayList from './ButtonsDisplayList';
import TypeRoomsList from './FilterTypeRoomsList';

import starImg from '../../assets/img/bookmark-star.svg';
import coinStackImg from '../../assets/img/coin-stack.svg';
import clockImg from '../../assets/img/clock.svg';
import placeholderRedImg from '../../assets/img/placeholder-red.svg';
import ButtonSortBy from './ButtonSortBy';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../redux/actions/filterActions';
import { AppStateType } from '../../redux/reducers/rootReducer';
import { fetchComplexes, sortComplexes } from '../../redux/actions/complexesActions';

type PropsTypes = {
  onClickDisplayButton?: (titleBtn: string) => void,
  onOpenMap?: () => void
}

const SortByCharacterList : React.FC < PropsTypes > = ({onClickDisplayButton, onOpenMap}) => {

    const dispatch = useDispatch();
    const {filterItems, filterItemsDiapason, sortBy, region} = useSelector(({ filter, complexes }:AppStateType) => {
      return {
        region: filter.region,
       filterItems: filter.filterItems,   
       filterItemsDiapason: filter.filterItemsDiapason,   
       sortBy: filter.sortBy,   
      }
    })
    const onClickBtn = useCallback((name: string) => {
      dispatch(setSortBy(name));
      dispatch(sortComplexes(name));
      // dispatch(fetchComplexes(region, filterItems, filterItemsDiapason, name));
    }, [dispatch, region, filterItems, filterItemsDiapason])
    
    return (
      <div className="sort-box__list-character list-character">
        <ButtonSortBy name="recomend" title="Рекомендуемые" icon={starImg} active={"recomend"===sortBy}
        onClick={onClickBtn}/>
        <ButtonSortBy name="cost" title="По цене" icon={coinStackImg} active={"cost"===sortBy}
        onClick={onClickBtn}/>
        <ButtonSortBy name="costSquare" title="По цене за м2" icon={coinStackImg} active={"costSquare"===sortBy}
        onClick={onClickBtn}/>
        <ButtonSortBy name="deadline" title="По сроку сдачи" icon={clockImg} active={"deadline"===sortBy}
        onClick={onClickBtn}/>
               
        <div className={"list-character__btn-map-wrap"}>
          <ButtonSortBy name="recomend" className={"list-character__btn-map"} onClick={onOpenMap} title="На карте" icon={placeholderRedImg} active={false}/>
        </div>
      </div>
  
    )
}

export default React.memo(SortByCharacterList);