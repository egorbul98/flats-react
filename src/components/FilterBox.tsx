import React, {useCallback, useState} from 'react';
import DropDown from './DropDown';
import classnames from 'classnames';


import resetIcon from '../assets/img/modal-close-red.svg';
import placeholderRed from '../assets/img/placeholder-red.svg';
import upArrow from '../assets/img/up-arrow.svg';
import downArrowGray from '../assets/img/arrow__down-input-grey.svg';
import Select from './miniComponents/Select';
import {useSelector, useDispatch} from 'react-redux';
import { AppStateType } from '../redux/reducers/rootReducer';
import { setChangeFilterItem, FilterItemType, setClearFilter } from '../redux/actions/filterActions';

type PropsTypesSelectWrap = {
    multi?: boolean,
    readonly?: boolean,
    classNames?: string,
    name: string,
    items?: Array<string>,
    placeholder: string
}

type PropsTypesFieldsFromToWrap = {
    name: string,
    placeholder: string
}

const FieldsFromToWrap: React.FC<PropsTypesFieldsFromToWrap> = ({name, placeholder}) => {
    return (
        <div className="filter-field filter-field-cost">
            <span className="filter-field__name filter-field__name-cost">{placeholder}</span>
            <div className="filter-field-cost__wrap filter-field__wrap-from-to">
                <input
                    type="text"
                    className='filter__cost-from filter__input'
                    name={`${name}From`}
                    placeholder="от"/>
                <input
                    type=" text"
                    className='filter__cost-to filter__input'
                    name={`${name}To`}
                    placeholder="до"/>
            </div>
        </div>
    )
}

type PropsTypes = {}

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
                      <FormFilterBox openInnerFields={formSlideDown}/>
                    </div>
                </DropDown>
            </div>
          <div className={classnames("filter__less-options",  {"filter__less-options--active": !formSlideDown}, {"hide": !slideDown})} onClick={onTogglerFormDropDown}>
                <span className="text">Меньше параметров</span><img src={upArrow} alt=""/>
          </div>
      </section>
     
    )
}
type PropsTypesForm = {
  openInnerFields: boolean;
}

const FormFilterBox: React.FC<PropsTypesForm> = ({ openInnerFields }) => {
    
    const dispatch = useDispatch();

    const onChangeFilterItem = useCallback(({ type, values }: FilterItemType) => {//Добавляет фильтры в redux
        
        dispatch(setChangeFilterItem({ type, values }))
    }, [dispatch]);
    
    const onClearFilter = useCallback(() => {//очищаем фильтры
        dispatch(setClearFilter())
    }, [dispatch]);

    const SelectWrap: React.FC<PropsTypesSelectWrap> = ({name, placeholder, ...props}) => {
        return (
            <div className="filter-field">
            <span className="filter-field__name">{placeholder}</span>
                <Select
                    {...props}
                    placeholder={placeholder}
                    name={name}
                    onChangeItem={onChangeFilterItem}
                />
            </div>
        )
    }
    
    return (
        <>
          <form action="" className="filter__form">
            <div className="filter__form-inner">
                    <div className="filter-wrap-top">
                        
                        <SelectWrap
                            placeholder="Район:"
                            multi={true}
                            items={["Район 1", "Район 2", "Район 3", "Район 4"]}
                            name="area"
                        />

                        <SelectWrap
                            placeholder="Метро:"
                            multi={true}
                            items={["Метро 1", "Метро 2", "Метро 3", "Метро 4"]}
                            name="metro"
                        />

                        <SelectWrap
                            placeholder="Срок сдачи:"
                            multi={true}
                            items={["Срок сдачи 1", "Срок сдачи 2", "Срок сдачи 3", "Срок сдачи 4"]}
                            name="deadline"
                        />

                        <FieldsFromToWrap name="cost" placeholder="Стоимость:"/>
                        
                  </div>
  
                  <div className={classnames({"slideDown--overflow-visible": openInnerFields})}>
                      <DropDown open={openInnerFields}>
                        <>
                            <div className="filter-wrap-middle">
                            <SelectWrap
                                placeholder="Комплекс:"
                                multi={true}
                                items={["Комплекс 1", "Комплекс 2", "Комплекс 3", "Комплекс 4"]}
                                name="complexe"
                                    />
                                    
                            <SelectWrap
                                placeholder="Застройщик:"
                                multi={true}
                                items={["Застройщик 1", "Застройщик 2", "Застройщик 3", "Застройщик 4"]}
                                name="developer"
                            />
                                    
                            <SelectWrap
                                placeholder="Тип квартиры:"
                                multi={true}
                                items={["Тип квартиры 1", "Тип квартиры 2", "Тип квартиры 3", "Тип квартиры 4"]}
                                name="rooms"
                            />
                             
                            <SelectWrap
                                placeholder="Тип собственности:"
                                multi={true}
                                items={["Тип собственности 1", "Тип собственности 2", "Тип собственности 3", "Тип собственности 4"]}
                                name="propertiesTypes"
                            />
                                    
                            <SelectWrap
                                placeholder="Отделка:"
                                multi={true}
                                items={["Отделка 1", "Отделка 2", "Отделка 3", "Отделка 4"]}
                                name="finish"
                            />
                                     
                            <FieldsFromToWrap name="square" placeholder="Площадь:"/>
                                   
                            </div>
          
                            <div className="filter-wrap-bottom">
                                    
                                <SelectWrap
                                    placeholder="Банк:"
                                    multi={true}
                                    items={["Банк 1", "Банк 2", "Банк 3", "Банк 4"]}
                                    name="bank"
                                />
                                    
                                <SelectWrap
                                    placeholder="Оплата:"
                                    multi={true}
                                    items={["Оплата 1", "Оплата 2", "Оплата 3", "Оплата 4"]}
                                    name="payment"
                                />
                                    
                             
                          </div>
                      
                        </>
                      </DropDown>
                  </div>
            </div>
  
              <div className="filter-buttons">
                    <button type="reset" className="filter__btn-reset pink__btn" onClick={onClearFilter}>Сбросить все фильтры
                      <img src={resetIcon} alt=""/></button>
                  <button type='button' className='filter__btn-show pink__btn'>Показать объекты</button>
                  <button type='button' className='filter__btn-show-map pink__btn'><img src={placeholderRed} alt=""/>Показать на карте</button>
              </div>
          </form>
  
        </>
    )
}
export default React.memo(FilterBox);