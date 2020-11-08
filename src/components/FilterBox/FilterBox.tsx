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
    {name: "metro", placeholder:"Метро:", items: ['Лихоборы', 'Котельники', 'Рассказовка', 'Ростокино', 'Измайловская', 'Сокольники']},
    {name: "deadline", placeholder:"Срок сдачи:", items: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028]},
]
const dataSelectMiddle:Array<SelectsDataType> = [
    {name: "name", placeholder:"Комплекс:", items: ['ЖК "Новое мурино"', 'ЖК "Старое мурино"', 'ЖК "Mandy"', 'ЖК "Kelli"', 'ЖК "Столичный"', 'ЖК "Северные высоты"']},
    {name: "developer", placeholder:"Застройщик:", items: ['ООО «Инвест Строй»', 'ООО «Сбер Строй»', 'ООО «AnarcoBuild»', 'ООО «SenmeiBuild»', 'ООО «Lovepad»']},
    {name: "rooms", placeholder:"Тип квартиры:", items: ["1-комнатная кв.", "2-комнатная кв.", "3-комнатная кв.", "Студия"]},
    { name: "propertiesTypes", placeholder: "Тип собственности:", items: ['Личный', 'Коллективный', 'Смешанный'] },
    {name: "finish", placeholder:"Отделка:", items: ['Чистовая', 'Черновая', 'Готовая', 'Без отделки']},
]
const dataSelectBottom:Array<SelectsDataType> = [
    {name: "bank", placeholder:"Банк:", items: ['АльфаБанк', 'Сбербанк', 'Тинькофф']},
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