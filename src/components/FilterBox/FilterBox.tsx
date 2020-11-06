import React, {useCallback, useState} from 'react';
import DropDown from '../DropDown';
import classnames from 'classnames';
import upArrow from '../../assets/img/up-arrow.svg';
import downArrowGray from '../../assets/img/arrow__down-input-grey.svg';
import FormFilterBox from './FormFilterBox';
import { SelectsDataType } from '../../mainTypes';

type PropsTypes = {}

const dataSelectTop:Array<SelectsDataType> = [
    {name: "area", placeholder:"Район:", items: ["Район 1", "Район 2", "Район 3", "Район 4"]},
    {name: "metro", placeholder:"Метро:", items: ["Метро 1", "Метро 2", "Метро 3", "Метро 4"]},
    {name: "deadline", placeholder:"Срок сдачи:", items: ["Срок сдачи 1", "Срок сдачи 2", "Срок сдачи 3", "Срок сдачи 4"]},
]
const dataSelectMiddle:Array<SelectsDataType> = [
    {name: "complexe", placeholder:"Комплекс:", items: ["Комплекс 1", "Комплекс 2", "Комплекс 3", "Комплекс 4"]},
    {name: "developer", placeholder:"Застройщик:", items: ["Застройщик 1", "Застройщик 2", "Застройщик 3", "Застройщик 4"]},
    {name: "rooms", placeholder:"Тип квартиры:", items: ["Тип квартиры 1", "Тип квартиры 2", "Тип квартиры 3", "Тип квартиры 4"]},
    { name: "propertiesTypes", placeholder: "Тип собственности:", items: ["Тип собственности 1", "Тип собственности 2", "Тип собственности 3", "Тип собственности 4"] },
    {name: "finish", placeholder:"Отделка:", items: ["Отделка 1", "Отделка 2", "Отделка 3", "Отделка 4"]},
]
const dataSelectBottom:Array<SelectsDataType> = [
    {name: "bank", placeholder:"Банк:", items: ["Банк 1", "Банк 2", "Банк 3", "Банк 4"]},
    {name: "payment", placeholder:"Оплата:", items: ["Оплата 1", "Оплата 2", "Оплата 3", "Оплата 4"]}
]
  
const FilterBox : React.FC < PropsTypes > = ({}) => {
    const [slideDown, setSlideDown] = useState(true);
    const [formSlideDown, setFormSlideDown] = useState(true);
    
    const onTogglerDropDown = ():void =>{
      setSlideDown(!slideDown)
    }
  
    const onTogglerFormDropDown = ():void =>{
      setFormSlideDown(!formSlideDown)
    }
   
    return (
        <section className={classnames("filter-box filter", {"slideDownForm": formSlideDown})}>
            <div className="filter-header">
                <h3 className="filter__title">Фильтр поиска</h3>
                <div className={classnames("filter__collapse-btn", {"filter__collapse-btn-open": !slideDown})} onClick={onTogglerDropDown}>
                    <span className="text">Свернуть</span><img src={downArrowGray} alt=""/>
                </div>
            </div>
            <hr className="hr"/>
            <div className={classnames({"slideDown--overflow-visible": slideDown})}>
                <DropDown open={slideDown}>
                    <div className="filter__collapse-wrap">
                        <FormFilterBox
                            openInnerFields={formSlideDown}
                            dataSelectBottom={dataSelectBottom}
                            dataSelectMiddle={dataSelectMiddle}
                            dataSelectTop={dataSelectTop}
                        />
                    </div>
                </DropDown>
            </div>
          <div className={classnames("filter__less-options",  {"filter__less-options--active": !formSlideDown}, {"hide": !slideDown})} onClick={onTogglerFormDropDown}>
                <span className="text">Меньше параметров</span><img src={upArrow} alt=""/>
          </div>
      </section>
     
    )
}


export default React.memo(FilterBox);