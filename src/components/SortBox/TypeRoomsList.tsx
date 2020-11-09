import React, { useCallback } from 'react';
import classNames from 'classnames';
import ButtonTypeRoom from './ButtonTypeRoom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers/rootReducer';
import {rooms} from './../../assets/data';
import { removeFilterItemValue, addFilterItemValue } from '../../redux/actions/filterActions';
type PropsTypes = {
  
}

const TypeRoomsList : React.FC < PropsTypes > = () => {

  const { filterItemsRooms } = useSelector(({ filter }: AppStateType) => {
    return {
      filterItemsRooms: filter.filterItems.filter((item) => {
        return item.type === "rooms";
      })[0]
    }
  });
  const { filterItems } = useSelector(({ filter }: AppStateType) => {
    return {
      filterItems: filter.filterItems
    }
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    
  }, [filterItems]);
// console.log(filterItemsRooms?.values === );

  const values = React.useMemo(() => {
      return filterItemsRooms ? filterItemsRooms.values.map((item) => item.value) : [];
  }, [filterItems]);

  
  
  const onClickButton = useCallback((value: string | number, index: number, isActive: boolean | undefined) => {
    if (isActive) {
      dispatch(removeFilterItemValue("rooms", value));
    } else {
      dispatch(addFilterItemValue("rooms", index, value));
    }
    // dispatch(removeFilterItemValue("rooms", value));
    // dispatch(setChangeFilterItem({ "rooms", values }))
  }, [dispatch]);

  // const [activeItem, setActiveItem] = React.useState("Плиткой");
  // const onClickButton = (titleBtn:string) => {
  //   setActiveItem(titleBtn);
  //   onClickDisplayButton && onClickDisplayButton(titleBtn);
  // }
  return (
    <div className="list-type-flats">
      {rooms && rooms.map((roomTitle, index) => {
        return <ButtonTypeRoom 
          key={index + "_" + roomTitle}
          index={index}
          title={roomTitle}
          active={values.includes(roomTitle)}
          onClick={onClickButton}/>
      })}
            
    </div>
    )
}

export default React.memo(TypeRoomsList);