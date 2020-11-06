
import React from 'react';
import {ReactComponent as SvgArrow} from '../../assets/img/icons/up-arrow.svg';
import classnames from 'classnames';
import { FilterItemType, ItemSelectType } from '../../redux/actions/filterActions';
import { AppStateType } from '../../redux/reducers/rootReducer';
import { useSelector } from 'react-redux';

type PropsType = {
  multi?: boolean,
  readonly?: boolean,
  classNames?: string,
  placeholder?: string,
  items?: Array<string>,
  active?: boolean,
  name?: string,
  onChangeItem?: ({ }: FilterItemType) => void,
}

const Select: React.FC<PropsType> = ({ readonly = true, multi = false, active = false, classNames, placeholder, items, name, onChangeItem }) => {

  const [show, setShow] = React.useState(active);
  const [valuesSelect, setValuesSelect] = React.useState([]);
 
  const onToggleShow = () => { setShow(!show); };

  const onCloseSelect = React.useCallback( (e: any) => {
    const parent = e.target.closest(".select-component");
    if ((parent === null) || (name && parent.getAttribute("data-name") !== name)) {
      setShow(false);
    }
  }, [name])


  React.useEffect(() => {
    document.body.addEventListener("click", onCloseSelect);
    return () => document.body.removeEventListener("click", onCloseSelect);
  }, [onCloseSelect, setValuesSelect]);

  React.useEffect(() => {
    if (onChangeItem !== undefined && name ) {
        onChangeItem({type: name, values: valuesSelect})
    }
  }, [valuesSelect]);


  const onChangeCheckbox = (e: any) => {
    const val = e.target.value;
    const index = e.target.getAttribute("data-index");
    const newObj = { type: name, value: { index: index, value: val, checked: e.target.checked } };
    let newStateValues: any = [];
    if (e.target.checked) {
      newStateValues = [...valuesSelect, { index: index, value: val, checked: e.target.checked}];
    } else {
      newStateValues = valuesSelect.filter((item:ItemSelectType) => item.index === index ? false : true )
    }
    setValuesSelect(newStateValues);
  }
console.log("render");

  return (
    <div className={classnames("select-component", classNames, { "active": show, "multi": multi })} data-name={name}>
    <div className="filter-field__select-arrow select-arrow"><SvgArrow/></div>
      <div className="select-input">
        <input type="text"
          value={valuesSelect.map((item: ItemSelectType) => {
            return item.value;
          }).join("; ")}
          className="select filter__input"
          placeholder={placeholder} readOnly={readonly}
          onClick={onToggleShow}/>
        
        <div className="checkboxes">
          <div className="checkboxes__inner">
            {items && items.map((item, index) => {
              return (
                <label key={index + "_" + item}>
                  <input
                    type="checkbox"
                    value={item} onChange={onChangeCheckbox}
                    data-index={index}
                    checked={valuesSelect.some((itemSel: ItemSelectType) => {
                    return itemSel.value === item ? true: false
                  })}/>
                      <span className="check"></span>
                      <span className="text">{item}</span>
                  </label>
              )
            })}
          </div>
        </div>
    </div>
  </div>

  )
}

export default React.memo(Select);