import React from 'react';

import SelectList from '../miniComponents/SelectList';
import FieldsFromToWrap from '../miniComponents/FieldsFromToWrap';
import { useFilter } from '../../handlers/hooks/useFilter';

type PropsTypes = { 
  onCloseFilter: ()=>void
}

const MapFormFilterBox : React.FC < PropsTypes > = ({onCloseFilter}) => {

  const [filterItems, filterItemsDiapason, dataSelectTop, dataSelectMiddle, dataSelectBottom, onChangeFilterItem, onChangeFilterItemDiapason, onClearFilter, onApplyFilter] = useFilter();

  const onHandleClickApplyFilter = () => {
    onApplyFilter();
    onCloseFilter();
  }

  const dataInputsCost = React.useMemo(() => filterItemsDiapason.filter((item) => item.type === "cost")[0], [filterItemsDiapason]);
  const dataInputsSquare = React.useMemo(() => filterItemsDiapason.filter((item) => item.type === "square")[0], [filterItemsDiapason]);
  
  return (
    <form action="" className="map-filter__form">
      <div className="map-filter__form-inner">
      {dataSelectTop &&
        <SelectList 
          arrSelects={dataSelectTop} 
          onChangeItem={onChangeFilterItem}
          filterItemsActive={filterItems}
          classNamesForItem={"map-filter-field"}
          classNamesForItemName={"map-filter-field__name"}
        />}
                
        <FieldsFromToWrap name="cost" placeholder="Стоимость:"
          from={dataInputsCost ? dataInputsCost.from : 0} to={dataInputsCost ? dataInputsCost.to : 0}
          onChangeFilterItem={onChangeFilterItemDiapason}
          classNamesForItem={"map-filter-field"}
          classNamesForItemName={"map-filter-field__name map-filter-field__name--display"}
          classNamesForWrapInputs={"map-filter-field-cost__wrap"}/>
        
      {dataSelectMiddle &&
        <SelectList 
          arrSelects={dataSelectMiddle} 
          onChangeItem={onChangeFilterItem}
          filterItemsActive={filterItems}
          classNamesForItem={"map-filter-field"}
          classNamesForItemName={"map-filter-field__name"}
        />}
      <FieldsFromToWrap name="square" placeholder="Площадь:"
        to={dataInputsSquare ? dataInputsSquare.to : 0} from={dataInputsSquare ? dataInputsSquare.from : 0}
      onChangeFilterItem={onChangeFilterItemDiapason}
      classNamesForItem={"map-filter-field"}
          classNamesForItemName={"map-filter-field__name map-filter-field__name--display"}
          classNamesForWrapInputs={"map-filter-field-cost__wrap"} />
        
        {dataSelectBottom &&
        <SelectList 
          arrSelects={dataSelectBottom} 
          onChangeItem={onChangeFilterItem}
          filterItemsActive={filterItems}
          classNamesForItem={"map-filter-field"}
          classNamesForItemName={"map-filter-field__name"}
        />}
      </div>

        <button type='button' className='map-filter__btn-show pink__btn' onClick={onHandleClickApplyFilter}>Показать объекты</button>
        <button type="reset" className="map-filter__btn-reset pink__btn" onClick={onClearFilter}>Сбросить все фильтры <img src="img/modal-close-red.svg" alt=""/></button>

    </form>
  )
}

export default React.memo(MapFormFilterBox);