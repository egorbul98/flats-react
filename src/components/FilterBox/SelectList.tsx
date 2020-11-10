import React from 'react';
import { SelectsDataType } from '../../mainTypes';
import { FilterItemType } from '../../redux/actions/filterActions';
import Select from '../miniComponents/Select';

type PropsTypesSelectList = {
  arrSelects: Array<SelectsDataType>,
  onChangeItem?: ({ }: FilterItemType) => void,
  filterItemsActive?: Array<FilterItemType>
}
const SelectList: React.FC<PropsTypesSelectList> = ({ arrSelects, onChangeItem, filterItemsActive }) => {
  const SelectsItems = arrSelects.map((selectItem: SelectsDataType, index:number) => {
    let activeItems = filterItemsActive?.filter(itemAtive => itemAtive.type === selectItem.name)[0];
    return (
        <div className="filter-field" key={index + "_" + selectItem.name}>
        <span className="filter-field__name">{selectItem.placeholder}</span>
            <Select
                {...selectItem}
                multi={true}
                onChangeItem={onChangeItem}
                activeItems={activeItems?.values}
            />
        </div>
    )
  })
  return (
      <>
        {SelectsItems}
      </>
  )
  
}

export default React.memo(SelectList);