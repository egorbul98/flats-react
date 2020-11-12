import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectsDataType } from '../../mainTypes';
import { FilterItemDiapasonType, FilterItemType, setChangeFilterItem, setChangeFilterItemDiapason, setClearFilter } from '../../redux/actions/filterActions';
import { AppStateType } from '../../redux/reducers/rootReducer';
import DropDown from '../DropDown';
import FieldsFromToWrap from './FieldsFromToWrap';
import SelectList from './SelectList';
import classNames from 'classnames';

import {area, bank, deadline,developer,finish, metroMOS, metroSP,name,payment,propertiesTypes,rooms} from './../../assets/data';
import resetIcon from '../../assets/img/modal-close-red.svg';
import placeholderRed from '../../assets/img/placeholder-red.svg';
import { fetchComplexes } from '../../redux/actions/complexesActions';

let dataSelectTop:Array<SelectsDataType> = [
  {name: "area", placeholder:"Район:", items: area},
  {name: "metro", placeholder:"Метро:", items: metroSP},
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

type PropsTypesForm = {
  openInnerFields: boolean,
  onOpenMap: () => void
}

const FormFilterBox: React.FC<PropsTypesForm> = ({ openInnerFields, onOpenMap}) => {
    
  const dispatch = useDispatch();
  const {filterItems, filterItemsDiapason, region} = useSelector(({ filter}:AppStateType) => {
    return {
        filterItems: filter.filterItems,
        filterItemsDiapason: filter.filterItemsDiapason,
        region: filter.region
      }
  })

  React.useEffect(() => {
    dataSelectTop = dataSelectTop.map((item) => {
        if (item.name === "metro") {
            region === "MOS" ? item.items = metroMOS : item.items = metroSP
        }
        return item;
    });
  }, [region]);
  
  const onChangeFilterItem = useCallback(({ type, values }: FilterItemType) => {//Добавляет фильтры в redux
      dispatch(setChangeFilterItem({ type, values }))
  }, [dispatch]);

  const onChangeFilterItemDiapason = useCallback(({ type, from, to }: FilterItemDiapasonType) => {//Добавляет фильтры в redux. Фильтры с диапазоном знаечний, например "Стоимость"
      dispatch(setChangeFilterItemDiapason({ type, from, to }))
  }, [dispatch]);
  
  const onClearFilter = useCallback(() => {//очищаем фильтры
      dispatch(setClearFilter())
      dispatch(fetchComplexes())
  }, [dispatch]);

  const onApplyFilter = useCallback(() => {//применяем фильтры
    dispatch(fetchComplexes())
  }, [dispatch]);

  return (
      
      <>
        <form action="" className="filter__form">
          <div className="filter__form-inner">
            <div className="filter-wrap-top">
            {dataSelectTop &&
              <SelectList 
                arrSelects={dataSelectTop} 
                onChangeItem={onChangeFilterItem}
                filterItemsActive={filterItems}
              />}
                      
            <FieldsFromToWrap name="cost" placeholder="Стоимость:"
              values={filterItemsDiapason.filter((item) => item.type === "cost")[0]}
            onChangeFilterItem={onChangeFilterItemDiapason}/>
            </div>

            <div className={classNames({"slideDown--overflow-visible": openInnerFields})}>
                <DropDown open={openInnerFields}>
                  <>
                    <div className="filter-wrap-middle">
                    {dataSelectMiddle &&
                      <SelectList 
                        arrSelects={dataSelectMiddle} 
                        onChangeItem={onChangeFilterItem}
                        filterItemsActive={filterItems}
                      />}
                    <FieldsFromToWrap name="square" placeholder="Площадь:"
                      values={filterItemsDiapason.filter((item) => item.type === "square")[0]}
                    onChangeFilterItem={onChangeFilterItemDiapason}/>
                    </div>
                
                    <div className="filter-wrap-bottom">
                    {dataSelectBottom &&
                      <SelectList 
                        arrSelects={dataSelectBottom} 
                        onChangeItem={onChangeFilterItem}
                        filterItemsActive={filterItems}
                      />}
                    </div>
                  </>
                </DropDown>
            </div>  
          </div>

            <div className="filter-buttons">
                  <button type="reset" className="filter__btn-reset pink__btn" onClick={onClearFilter}>Сбросить все фильтры
                    <img src={resetIcon} alt=""/></button>
                <button type='button' className='filter__btn-show pink__btn' onClick={onApplyFilter}>Показать объекты</button>
                <button type='button' className='filter__btn-show-map pink__btn' onClick={onOpenMap}><img src={placeholderRed} alt=""/>Показать на карте</button>
            </div>
        </form>

      </>
  )
}

export default React.memo(FormFilterBox);