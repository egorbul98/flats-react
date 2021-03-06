import React from 'react';
import iconArrowLeft from './../../assets/img/arrow-left-grey.svg';
import { ComplexeType } from '../../mainTypes';
import ComplexCart from '../CatalogComplexes/ComplexCart';

type PropsTypes = {
  complex: ComplexeType,
  onClickBack: () => void,
  isFavorite?:boolean
}

const ComplexInfo : React.FC < PropsTypes > = ({complex, isFavorite, onClickBack}) => {

  return (
    <div className="map__complex-info complex-info">
    <div className="complex-info__close" onClick={onClickBack}>
      <span className="close"><img src={window.location.origin+iconArrowLeft} alt="img" /><span className="go-to-filter">Назад к фильтру</span><span className="go-to-map">Назад к карте</span></span> </div>
      <div className="map__complex-info-inner">

        <ComplexCart {...complex} mini={true} isFavorite={isFavorite}/>
      
      </div>

    </div>
  )
}

export default React.memo(ComplexInfo);