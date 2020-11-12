import React from 'react';
import classNames from 'classnames';
import { FilterItemDiapasonType } from '../../redux/actions/filterActions';

type PropsTypesFieldsFromToWrap = {
  name: string,
  placeholder: string,
  values?: {from: number, to: number},
  onChangeFilterItem?: ({ }: FilterItemDiapasonType) => void,
  classNamesForItem?:string,
  classNamesForItemName?:string,
  classNamesForWrapInputs?:string,
}

const FieldsFromToWrap: React.FC<PropsTypesFieldsFromToWrap> = ({ name, placeholder, onChangeFilterItem, values, classNamesForItem, classNamesForItemName, classNamesForWrapInputs }) => {
  const [fromValue, setFromValue] = React.useState(values?.from ? values.from : '');
  const [toValue, setToValue] = React.useState(values?.to ? values.to : '');

  const onChange = (e: any) => {//ввод только цифр
    if (/\d+/.test(String(+e.target.value))) {
      const type = e.target.getAttribute("data-type");
      type === "from" ? setFromValue(e.target.value) : setToValue(e.target.value);
    }
  }
  React.useEffect(() => {
    if (values === undefined) {
      setFromValue('');
      setToValue('');
    }
  }, [values]);

  React.useEffect(() => {
    onChangeFilterItem && onChangeFilterItem({type:name, from:+fromValue, to:+toValue})
  }, [fromValue, toValue]);

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
                value={fromValue}
                onChange={onChange}
              />
              <input
                  type=" text"
                  className='filter__cost-to filter__input'
                  name={`${name}To`}
                  placeholder="до"
                  data-type="to"
                  value={toValue}
                  onChange={onChange}
              />
          </div>
      </div>
  )
}
export default React.memo(FieldsFromToWrap);