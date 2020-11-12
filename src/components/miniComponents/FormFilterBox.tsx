import React from 'react';
import DropDown from '../DropDown';
import FieldsFromToWrap from '../FilterBox/FieldsFromToWrap';
import SelectList from './SelectList';
import classNames from 'classnames';

import resetIcon from '../../assets/img/modal-close-red.svg';
import placeholderRed from '../../assets/img/placeholder-red.svg';
import { useFilter } from '../../handlers/hooks/useFilter';



type PropsTypesForm = {
  openInnerFields: boolean,
  onOpenMap: () => void
}

const FormFilterBox: React.FC<PropsTypesForm> = ({ openInnerFields, onOpenMap}) => {
    
  const [filterItems, filterItemsDiapason, dataSelectTop, dataSelectMiddle, dataSelectBottom, onChangeFilterItem, onChangeFilterItemDiapason, onClearFilter, onApplyFilter] = useFilter();

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