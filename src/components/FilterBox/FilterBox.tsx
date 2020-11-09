import React, {useCallback, useState} from 'react';
import DropDown from '../DropDown';
import classnames from 'classnames';
import upArrow from '../../assets/img/up-arrow.svg';
import downArrowGray from '../../assets/img/arrow__down-input-grey.svg';
import FormFilterBox from './FormFilterBox';
import { SelectsDataType } from '../../mainTypes';
import {area, bank, deadline,developer,finish,metro,name,payment,propertiesTypes,rooms} from './../../assets/data';
type PropsTypes = {}

const dataSelectTop:Array<SelectsDataType> = [
    {name: "area", placeholder:"Район:", items: area},
    {name: "metro", placeholder:"Метро:", items: metro},
    {name: "deadline", placeholder:"Срок сдачи:", items: deadline},
]
const dataSelectMiddle:Array<SelectsDataType> = [
    {name: "name", placeholder:"Комплекс:", items: name},
    {name: "developer", placeholder:"Застройщик:", items: developer},
    {name: "rooms", placeholder:"Тип квартиры:", items: rooms},
    { name: "propertiesTypes", placeholder: "Тип собственности:", items: propertiesTypes },
    {name: "finish", placeholder:"Отделка:", items: finish},
]
const dataSelectBottom:Array<SelectsDataType> = [
    {name: "bank", placeholder:"Банк:", items: bank},
    {name: "payment", placeholder:"Оплата:", items: payment}
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