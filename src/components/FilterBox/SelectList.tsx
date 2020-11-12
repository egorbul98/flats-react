import React from 'react';
import classNames from 'classnames';
import { SelectsDataType } from '../../mainTypes';
import { FilterItemType } from '../../redux/actions/filterActions';
import Select from '../miniComponents/Select';

type PropsTypesSelectList = {
  arrSelects: Array<SelectsDataType>,
  onChangeItem?: ({ }: FilterItemType) => void,
  filterItemsActive?: Array<FilterItemType>,
  classNamesForItem?:string,
  classNamesForItemName?:string
}
const SelectList: React.FC<PropsTypesSelectList> = ({ arrSelects, onChangeItem, filterItemsActive, classNamesForItem, classNamesForItemName }) => {
  const SelectsItems = arrSelects.map((selectItem: SelectsDataType, index:number) => {
    let activeItems = filterItemsActive?.filter(itemAtive => itemAtive.type === selectItem.name)[0];
    return (
      <div className={ classNames({"filter-field": classNamesForItem === undefined}, classNamesForItem)} key={index + "_" + selectItem.name}>
        <span className={ classNames({"filter-field__name": classNamesForItemName === undefined}, classNamesForItemName)}>{selectItem.placeholder}</span>
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