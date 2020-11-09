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
  console.log("ren");
  // const activeItems = React.useMemo(()=>filterItemsActive?.filter(itemAtive => itemAtive.type === selectItem.name)[0], [filterItemsActive]);
  
  return (
      <>
      {arrSelects.map((selectItem: SelectsDataType, index) => {
        const activeItems = filterItemsActive?.filter(itemAtive => itemAtive.type === selectItem.name)[0];
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
          })}
      </>
  )
  
}


export default React.memo(SelectList);