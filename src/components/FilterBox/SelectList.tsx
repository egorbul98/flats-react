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
  
  
  return (
      <>
      {arrSelects.map((selectItem: SelectsDataType, index) => {
        const activeItems = filterItemsActive?.filter(itemAtive => itemAtive.type === selectItem.name)[0];
            console.log(activeItems);
            
              return (
                  <div className="filter-field" key={index + "_" + selectItem.name}>
                  <span className="filter-field__name">{selectItem.placeholder}</span>
                      <Select
                          {...selectItem}
                          multi={true}
                    onChangeItem={onChangeItem}
                    activeItems={activeItems?.values}
                          // onClickShowSelect={(name) => {
                          //     console.log(name, "name");
                          //     setActiveSelect(name)
                          // }}
                      />
                  </div>
              )
          })}
      </>
  )
  
}

const It: React.FC<any> = (selectItem, onChangeItem) => {
  return (
    <div className="filter-field">
    <span className="filter-field__name">{selectItem.placeholder}</span>
        <Select
            {...selectItem}
            multi={true}
            onChangeItem={onChangeItem}
            // onClickShowSelect={(name) => {
            //     console.log(name, "name");
            //     setActiveSelect(name)
            // }}
        />
    </div>
  )
  
}

export default React.memo(SelectList);