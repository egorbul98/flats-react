import React from 'react';
import classNames from 'classnames';
import { FilterItemDiapasonType } from '../../redux/actions/filterActions';

type PropsTypesFieldsFromToWrap = {
  name: string,
  placeholder: string,
  from:number,
  to:number,
  onChangeFilterItem?: ({ }: FilterItemDiapasonType) => void,
  classNamesForItem?:string,
  classNamesForItemName?:string,
  classNamesForWrapInputs?:string,
}

const FieldsFromToWrap: React.FC<PropsTypesFieldsFromToWrap> = ({ name, placeholder, onChangeFilterItem, from, to, classNamesForItem, classNamesForItemName, classNamesForWrapInputs}) => {
  const onChange = (e: any) => {
    if (/\d+/.test(String(+e.target.value))) {//ввод только цифр
      const type = e.target.getAttribute("data-type");
        if (type === "from") {
          onChangeFilterItem && onChangeFilterItem({ type: name, from: +e.target.value, to: to ? +to : 0 });
        } else {
          onChangeFilterItem && onChangeFilterItem({ type: name, from: from ? +from : 0, to: +e.target.value })
        }
    }
  }
  

  return (
      <div className={classNames({"filter-field  filter-field-cost": classNamesForItem === undefined}, classNamesForItem)}>
          <span className={ classNames({"filter-field__name filter-field__name-cost": classNamesForItemName === undefined}, classNamesForItemName)}>{placeholder}</span>
          <div className={classNames({"filter-field__wrap-from-to": classNamesForWrapInputs === undefined}, classNamesForWrapInputs)}>
              <input
                type="text"
                className='filter__cost-from filter__input'
                name={`${name}From`}
                placeholder="от"
                data-type="from"
                value={from!==0? from : ""}
                onChange={onChange}
              />
              <input
                  type=" text"
                  className='filter__cost-to filter__input'
                  name={`${name}To`}
                  placeholder="до"
                  data-type="to"
                  value={to!==0 ? to : ""}
                  onChange={onChange}
              />
          </div>
      </div>
  )
}
export default React.memo(FieldsFromToWrap);