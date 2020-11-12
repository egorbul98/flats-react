import React, {useCallback, useState} from 'react';
import classnames from 'classnames';

import DropDown from '../DropDown';
import FormFilterBox from '../miniComponents/FormFilterBox';
import upArrow from '../../assets/img/up-arrow.svg';
import downArrowGray from '../../assets/img/arrow__down-input-grey.svg';

type PropsTypes = {
    onOpenMap: () => void
}

const FilterBox : React.FC < PropsTypes > = ({onOpenMap}) => {
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
                            onOpenMap={onOpenMap }
                        />
                    </div>
                </DropDown>
            </div>
          <div className={classnames("filter__less-options",  {"filter__less-options--active": !formSlideDown}, {"hide": !slideDown})} onClick={onTogglerFormDropDown}>
                <span className="text">{formSlideDown ? "Меньше" : "Больше"} параметров</span><img src={upArrow} alt=""/>
          </div>
      </section>
     
    )
}


export default React.memo(FilterBox);