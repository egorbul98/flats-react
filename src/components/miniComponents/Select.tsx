
import React from 'react';
import {ReactComponent as SvgArrow} from '../../assets/img/icons/up-arrow.svg';
import classnames from 'classnames';
import { FilterItemType} from '../../redux/actions/filterActions';
import { AppStateType } from '../../redux/reducers/rootReducer';
import { useSelector } from 'react-redux';
import {CSSTransition, TransitionGroup, Transition} from 'react-transition-group';
import { ItemSelectType, SelectsDataType } from '../../mainTypes';

type PropsType = {
  multi?: boolean,
  readonly?: boolean,
  classNames?: string,
  placeholder?: string,
  items?: Array<string>,
  active?: boolean,
  name?: string,
  activeItems?: Array<ItemSelectType> | null ,
  onChangeItem?: ({ }: FilterItemType) => void,
  onClickShowSelect?: (name: string | null) => void
}

const Select: React.FC<PropsType> = ({ readonly = true, multi = false, active = false, classNames, placeholder, items, activeItems, name, onChangeItem, onClickShowSelect }) => {

  const [show, setShow] = React.useState(active);
  
  const [valuesSelect, setValuesSelect] = React.useState<Array<ItemSelectType>>(activeItems ? activeItems : []);
  
  React.useEffect(() => {
    if (activeItems === undefined) {
      setValuesSelect([])
    }
  }, [activeItems]);
  
  const onToggleShow = () => {
    if (onClickShowSelect && name) {
      onClickShowSelect(name);
    } else {
      setShow(!show);
    }
  };

  const onCloseSelect = React.useCallback( (e: any) => {
    const parent = e.target.closest(".select-component");
    if ((parent === null) || (name && parent.getAttribute("data-name") !== name)) {
      setShow(false);
    }
  }, [name])


  React.useEffect(() => {
    document.body.addEventListener("click", onCloseSelect);
    return () => document.body.removeEventListener("click", onCloseSelect);
  }, [onCloseSelect]);

  React.useEffect(() => {
    if (onChangeItem !== undefined && name ) {
        // onChangeItem({type: name, values: valuesSelect})
        onChangeItem({type: name, values: valuesSelect})
    }
  }, [valuesSelect]);


  const onChangeCheckbox = (e: any) => {
    const val = e.target.value;
    const index = e.target.getAttribute("data-index");
    // const newObj = { type: name, value: { index: index, value: val, checked: e.target.checked } };
    let newStateValues: Array<ItemSelectType> = [];
    if (e.target.checked) {
      newStateValues = [...valuesSelect, { index: index, value: val, checked: e.target.checked}];
    } else {
      newStateValues = valuesSelect.filter((item:ItemSelectType) => item.index === index ? false : true )
    }
    
    setValuesSelect(newStateValues);
  }
// console.log("render");
  // ***************************
const duration = 150;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }
  
const transitionStyles = {
    entering: { opacity: 1, visibility: "visible" },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
  exited: { opacity: 0, visibility: "hidden" },
  };
   // ***************************
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
        
        <Transition in={show} timeout={duration}>
          {state => (
            <div className="checkboxes"
              //@ts-ignore
              style={{...defaultStyle, ...transitionStyles[state]}}
            >
              <div className="checkboxes__inner">
              {items && items.map((item, index) => {
                return (
                  <label key={index + "_" + item}>
                    <input
                      type="checkbox"
                      value={item} onChange={onChangeCheckbox}
                      data-index={index}
                      checked={valuesSelect ? valuesSelect.some((itemSel: ItemSelectType) => {
                      return itemSel.value === item ? true: false
                    }) : false}/>
                        <span className="check"></span>
                        <span className="text">{item}</span>
                    </label>
                )
              })}
            </div>
            </div>
          )}
          </Transition>
       
    </div>
  </div>

  )
}

export default React.memo(Select);