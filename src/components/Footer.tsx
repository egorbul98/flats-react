import React from 'react';
import iconVK from '../assets/img/logo_vk.png';
import iconYT from '../assets/img/logo_youtube.png';
import iconInst from '../assets/img/logo_instagram.png';

import { useSwitchRegion } from '../handlers/hooks/useSwitchRegion';
import { useDispatch } from 'react-redux';
import { FilterItemDiapasonType, setChangeFilterItemDiapason } from '../redux/actions/filterActions';
import { fetchComplexes } from '../redux/actions/complexesActions';
import { Link } from 'react-router-dom';
import SearchComplexesBlock from './SearchComplexesBlock';
type PropsTypes = {
  onOpenMap?: () => void;
}

const Footer : React.FC < PropsTypes > = ({onOpenMap}) => {
  const [region, onHandleClick] = useSwitchRegion();
  const dispatch = useDispatch();

  const onChangeFilterItemDiapason = ({ type, from, to }: FilterItemDiapasonType) => {//Добавляет фильтры в redux. Фильтры с диапазоном знаечний, например "Стоимость"
    dispatch(setChangeFilterItemDiapason({ type, from, to }));
    dispatch(fetchComplexes());
  };
  
  return (
  <footer className="catalog-footer">
    <div className="catalog-wrapper">
      <div className="catalog-footer__wrap">
        <div className="catalog-footer__item buildings">
          <h4 className="catalog-footer__item-title">Новостройки</h4>
          <div className="buildings__item catalog-footer__text" ><a href="#catalog-complex-box" onClick={()=>onHandleClick("SP")}>В Санкт-Петербурге и ЛО</a></div>
          <div className="buildings__item catalog-footer__text" ><a href="#catalog-complex-box" onClick={()=>onHandleClick("MOS")}>В Москве и МО</a></div>
            {onOpenMap && <div className="buildings__show-map catalog-footer__text"><a href="#" onClick={onOpenMap}>Новостройки на карте</a></div>}
        </div>
        <div className="catalog-footer__item popular">
          <h4 className="catalog-footer__item-title">Популярное</h4>
          <div className="popular__item catalog-footer__text"><a href="#catalog-complex-box" onClick={(e)=>{
              // e.preventDefault();
              onChangeFilterItemDiapason({type:"cost", from:0, to:4000000})
            }}>До 4 миллионов</a></div>
          <div className="popular__item catalog-footer__text"><a href="#catalog-complex-box" onClick={(e)=>{
              // e.preventDefault();
              onChangeFilterItemDiapason({type:"cost", from:0, to:5000000})
            }}>До 5 миллионов</a></div>
          <div className="popular__item catalog-footer__text"><a href="#catalog-complex-box" onClick={(e)=>{
              // e.preventDefault();
              onChangeFilterItemDiapason({type:"cost", from:0, to:6000000})
            }}>До 6 миллионов</a></div>
            
        </div>
       
          <div className="catalog-footer__item social">
            <SearchComplexesBlock/>
         
          <div className="social__site"><Link to="/">PRONovostroyki.com</Link></div>

          <div className="social__list">
            <div className="social__item"><a href="vk.com"><img className='lazy' src={iconVK} alt=""/></a></div>
            <div className="social__item"><a href="youtube.com"><img className='lazy' src={iconYT} alt=""/></a></div>
            <div className="social__item"><a href="instagram.com"><img className='lazy' src={iconInst} alt=""/></a></div>
          </div>

        </div>
      </div>
    </div>
  </footer>
)
}

export default React.memo(Footer);