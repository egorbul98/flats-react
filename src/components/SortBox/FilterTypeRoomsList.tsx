import React, { Dispatch, useCallback } from 'react';
import classNames from 'classnames';
import ButtonTypeRoom from './ButtonTypeRoom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers/rootReducer';
import {rooms} from '../../assets/data';
import { removeFilterItemValue, addFilterItemValue } from '../../redux/actions/filterActions';
import { fetchComplexes } from '../../redux/actions/complexesActions';
type PropsTypes = {
  
}

const FilterTypeRoomsList : React.FC < PropsTypes > = () => {

  // const { filterItemRooms } = useSelector(({ filter }: AppStateType) => {
  //   return {
  //     filterItemRooms: filter.filterItems.filter((item) => {
  //       return item.type === "rooms";
  //     })[0]
  //   }
  // });
  const { filterItems } = useSelector(({ filter }: AppStateType) => {
    return {
      filterItems: filter.filterItems
    }
  });

  const filterItemRooms = filterItems.filter((item) => {
    return item.type === "rooms";
  })[0];

  const dispatch = useDispatch();
 
  const onClickButton = useCallback((value: string | number, index: number, isActive: boolean | undefined) => {
    if (isActive) {
      dispatch(removeFilterItemValue("rooms", value));
    } else {
      dispatch(addFilterItemValue("rooms", index, value));
    }
    dispatch(fetchComplexes());
  }, [dispatch]);

  return (
    <div className="list-type-flats">
      {rooms && rooms.map((roomTitle, index) => {
        return <ButtonTypeRoom 
          key={index + "_" + roomTitle}
          index={index}
          title={roomTitle}
          active={filterItemRooms ? filterItemRooms.values.some((item)=>item.index==index) : false}
          onClick={onClickButton}/>
      })}
            
    </div>
    )
}

export default React.memo(FilterTypeRoomsList);