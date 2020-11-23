import React, { useCallback } from 'react';
import classNames from 'classnames';

import iconFilter from './../../assets/img/icon-filter.svg';
import iconFilterList from './../../assets/img/filter-list.svg';
import iconArrowLeft from './../../assets/img/arrow-left-grey.svg';
import MainMap from './MainMap';
import MapFormFilterBox from './MapFormFilterBox';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers/rootReducer';
import ComplexInfo from './ComplexInfo';
import { ComplexeType } from '../../mainTypes';

type PropsTypes = {
  open: boolean,
  onCloseMap: () => void
}


const MapModal : React.FC < PropsTypes > = ({open, onCloseMap}) => {

  const [idActiveComplex, setIdActiveComplex] = React.useState<number | null>(null);
  const [openFilter, setOpenFilter] = React.useState(false);//Только для мобильной версии

  const { region, complexesItems } = useSelector(({ filter, complexes }: AppStateType) => {
    return {
      region: filter.region,
      complexesItems: complexes.items
    }
  })
  
  React.useEffect(() => {
    setIdActiveComplex(null)
  }, [region]);
  const activeComplex: ComplexeType = React.useMemo(() => complexesItems.filter((item)=>item.id === idActiveComplex)[0], [idActiveComplex]);
  // const activeComplex: ComplexeType = complexesItems.filter((item)=>item.id === idActiveComplex)[0]

  const toggleFilter = () => {
    
    if (idActiveComplex) {
      setIdActiveComplex(null);
      // setOpenFilter(true);
    } else {
      setOpenFilter(!openFilter);
    }
  }

  const onCloseFilter = useCallback(() => {
    setOpenFilter(false);
  }, [openFilter, setOpenFilter]);
  
  const onCloseInfoComplex = useCallback(() => {
    setIdActiveComplex(null);
    setOpenFilter(false);
  }, [setIdActiveComplex, setOpenFilter]);

  const onClickPlacemark = useCallback((idComplex) => {
    if (idActiveComplex !== idComplex) {
      setIdActiveComplex(idComplex);
      setOpenFilter(true);
    }
  }, [idActiveComplex, setIdActiveComplex, setOpenFilter]);

  const coordsCenter:[number, number] = React.useMemo(() => region === "MOS" ? [55.75420858806455, 37.62571648313102] : [59.93627718312728, 30.326687545673263], [region]);
  // const coordsCenter:[number, number] = region === "MOS" ? [55.75420858806455, 37.62571648313102] : [59.93627718312728, 30.326687545673263]

  return (
    <section className={classNames("map-modal", {"map-modal--open": open}) }>
        <div className="map-wrapper">
        <div className={ classNames("map-filter", {"map-filter--active": openFilter})}>
        {/* <div className={ classNames("map-filter")}> */}
            <div className="map-modal__close" onClick={onCloseMap}><span className="close"><img src={window.location.origin+iconArrowLeft} alt="img"/>Показать списком</span></div>
            <h3 className="map-modal__title">Новостройки на карте <span className="city">{region === "SP" ? "Санкт-Петербурга" : "Москвы и МО"}</span></h3>
            <hr className="hr" />
          
          {idActiveComplex
            ? <ComplexInfo complex={activeComplex} onClickBack={onCloseInfoComplex} />
            : <MapFormFilterBox onCloseFilter={onCloseFilter} />}
          
        </div>
        
        
          <MainMap center={coordsCenter} onClickPlacemark={ onClickPlacemark }/>
        
          <div className="map-footer">
              <button type='button' className="map-footer__btn-open-filter" onClick={toggleFilter}><img src={iconFilter} alt=""/><span className="close">&#10006;</span>Фильтр </button>
              <button type='button' className="map-footer__btn-open-list" onClick={onCloseMap}><img src={iconFilterList} alt=""/>Списком</button>
          </div>
        </div>
      </section>

  )
}

export default React.memo(MapModal);