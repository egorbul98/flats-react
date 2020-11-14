import React from 'react';
import iconVK from '../assets/img/logo_vk.png';
import iconYT from '../assets/img/logo_youtube.png';
import iconInst from '../assets/img/logo_instagram.png';
import iconSearch from '../assets/img/icon-search.svg';
import { useSwitchRegion } from '../handlers/hooks/useSwitchRegion';
import { useDispatch } from 'react-redux';
import { FilterItemDiapasonType, setChangeFilterItemDiapason } from '../redux/actions/filterActions';
import { fetchComplexes } from '../redux/actions/complexesActions';
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
          <div className="buildings__show-map catalog-footer__text"><a href="#" onClick={onOpenMap}>Новостройки на карте</a></div>
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
        {/* <div className="catalog-footer__item different">
          <div className="different__sales catalog-footer__text"><a href="">Старты продаж новостроек</a></div>
          <div className="different__other other">
            <div className="other__item catalog-footer__text other__video"><a href="#">Видеобзоры ЖК</a></div>
            <div className="other__item catalog-footer__text other__item--width"><a href="#">Новости</a></div>
            <div className="other__item catalog-footer__text other__item--width"><a href="#">Статьи</a></div>
          </div>

        </div> */}
        <div className="catalog-footer__item social">
          <form action="" className="form-search">
            <div className="form-search__field">
              <input readOnly type="search" className="form-search__input" placeholder="Поиск по базе"/>
              <button type='submit' className="btn-search"><img src={iconSearch} alt=""/></button>
            </div>
          </form>

          <div className="social__site"><a href="#">PRONovostroyki.com</a></div>

          <div className="social__list">
            <div className="social__item"><a href="#"><img className='lazy' src={iconVK} alt=""/></a></div>
            <div className="social__item"><a href="#"><img className='lazy' src={iconYT} alt=""/></a></div>
            <div className="social__item"><a href="#"><img className='lazy' src={iconInst} alt=""/></a></div>
          </div>

        </div>
      </div>
    </div>
  </footer>
)
}

export default React.memo(Footer);