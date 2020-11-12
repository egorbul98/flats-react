import React, { useCallback } from 'react';
import classNames from 'classnames';

import {area, bank, deadline,developer,finish, metroMOS, metroSP,name,payment,propertiesTypes,rooms} from './../assets/data';
import { SelectsDataType } from '../mainTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../redux/reducers/rootReducer';
import SelectList from './FilterBox/SelectList';
import FieldsFromToWrap from './FilterBox/FieldsFromToWrap';
import { fetchComplexes } from '../redux/actions/complexesActions';
import { FilterItemDiapasonType, FilterItemType, setChangeFilterItem, setChangeFilterItemDiapason, setClearFilter } from '../redux/actions/filterActions';

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

type PropsTypes = {
  open: boolean,
  onCloseMap: () => void
}

const MapModal : React.FC < PropsTypes > = ({open, onCloseMap}) => {

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
    <section className={classNames("map-modal", {"map-modal--open": open}) }>
        {/* <div className="map-margin"></div> */}
        <div className="map-wrapper">

          <div className="map-filter">
            <div className="map-modal__close" onClick={onCloseMap}><span className="close"><img src="img/arrow-left-grey.svg" alt="img"/>Показать списком</span></div>
            <h3 className="map-modal__title">Новостройки на карте <span className="city">{region === "SP" ? "Санкт-Петербурга" : "Москвы и МО"}</span></h3>
            <hr className="hr"/>

            <form action="" className="map-filter__form">

            <div className="map-filter__form-inner">
            {dataSelectTop &&
              <SelectList 
                arrSelects={dataSelectTop} 
                onChangeItem={onChangeFilterItem}
                filterItemsActive={filterItems}
                classNamesForItem={"map-filter-field"}
                classNamesForItemName={"map-filter-field__name"}
              />}
                      
              <FieldsFromToWrap name="cost" placeholder="Стоимость:"
                values={filterItemsDiapason.filter((item) => item.type === "cost")[0]}
                onChangeFilterItem={onChangeFilterItemDiapason}
                classNamesForItem={"map-filter-field"}
                classNamesForItemName={"map-filter-field__name"}
                classNamesForWrapInputs={"map-filter-field-cost__wrap"}/>
              
            {dataSelectMiddle &&
              <SelectList 
                arrSelects={dataSelectMiddle} 
                onChangeItem={onChangeFilterItem}
                filterItemsActive={filterItems}
                classNamesForItem={"map-filter-field"}
                classNamesForItemName={"map-filter-field__name"}
              />}
            <FieldsFromToWrap name="square" placeholder="Площадь:"
              values={filterItemsDiapason.filter((item) => item.type === "square")[0]}
            onChangeFilterItem={onChangeFilterItemDiapason}
            classNamesForItem={"map-filter-field"}
                classNamesForItemName={"map-filter-field__name"}
                classNamesForWrapInputs={"map-filter-field-cost__wrap"} />
              
              {dataSelectBottom &&
              <SelectList 
                arrSelects={dataSelectBottom} 
                onChangeItem={onChangeFilterItem}
                filterItemsActive={filterItems}
                classNamesForItem={"map-filter-field"}
                classNamesForItemName={"map-filter-field__name"}
              />}
            </div>
        

              <button type='button' className='map-filter__btn-show pink__btn'>Показать объекты</button>
              <button type="reset" className="map-filter__btn-reset pink__btn">Сбросить все фильтры <img
                  src="img/modal-close-red.svg" alt=""/></button>

            </form>
          </div>
          <div className="map__complex-info complex-info">
            <div className="complex-info__close"><span className="close"><img src="img/arrow-left-grey.svg" alt="img"/><span
                  className="go-to-filter">Назад к
                  фильтру</span><span className="go-to-map">Назад к
                  карте</span></span></div>
            <div className="map__complex-info-inner">
              <div className="catalog-complex__item">
                <div className="catalog-complex__item-header">
                  <div className="catalog-complex__slider">
                    <div className="catalog-complex__slide">
                      <img className='lazy' data-src="img/img-video-1.jpg" src="img/content-item-img.png" alt="img"/>
                      <div className="catalog-complex__slide-icons">
                        <img src="img/slide-heart.svg" alt="img"/>
                        <img src="img/slide-build.svg" alt="img"/>
                      </div>
                    </div>
                    <div className="catalog-complex__slide">
                      <img className='lazy' data-src="img/analog_1.jpg" src="img/content-item-img.png" alt=""/>
                      <div className="catalog-complex__slide-icons">
                        <img src="img/slide-heart.svg" alt="img"/>
                        <img src="img/slide-build.svg" alt="img"/>
                      </div>
                    </div>
                  </div>
                  <div className="catalog-complex__slider-counter">1/3</div>
                  <div className="catalog-complex__buttons-wrap catalog-complex__item-header-buttons">
                    <button type='button' className="catalog-complex__btn-more pink__btn">Подробнее</button>
                    <button type='button' className="catalog-complex__btn-show-map pink__btn"><img src="img/placeholder-red.svg"
                        alt=""/>На карте</button>
                  </div>

                  <ul className="complex-advantages__features-list">
                    <li className="complex-advantages__features-item complex-advantages__features-item--sale">
                      <div className="complex-advantages__features-item-box">
                        <svg width="13" height="14">
                          <use xlinkHref="#icon-feature_sale"></use>
                        </svg>
                      </div>
                      <span className="complex-advantages__features-hint complex-advantages__features-hint--sale">Скидка
                        партнерам</span>
                    </li>

                    <li className="complex-advantages__features-item complex-advantages__features-item--deal">
                      <div className="complex-advantages__features-item-box">
                        <svg width="14" height="14">
                          <use xlinkHref="#icon-feature_deal"></use>
                        </svg>
                      </div>
                      <span
                        className="complex-advantages__features-hint complex-advantages__features-hint--deal">Безопасная&nbsp;сделка</span>
                    </li>
                    <li className="complex-advantages__features-item complex-advantages__features-item--gift">
                      <div className="complex-advantages__features-item-box">
                        <svg width="13" height="10">
                          <use xlinkHref="#icon-feature_gift"></use>
                        </svg>
                      </div>
                      <span
                        className="complex-advantages__features-hint complex-advantages__features-hint--gift">Приемка&nbsp;в&nbsp;подарок</span>
                    </li>
                    <li className="complex-advantages__features-item complex-advantages__features-item--decor">
                      <div className="complex-advantages__features-item-box">
                        <svg width="12" height="17">
                          <use xlinkHref="#icon-feature_decor"></use>
                        </svg>
                      </div>
                      <span
                        className="complex-advantages__features-hint complex-advantages__features-hint--decor">Сертификат&nbsp;на&nbsp;отделку</span>
                    </li>
                    <li className="complex-advantages__features-item complex-advantages__features-item--conditions">
                      <div className="complex-advantages__features-item-box">
                        <svg width="18" height="13">
                          <use xlinkHref="#icon-bus"></use>
                        </svg>
                      </div>
                      <span
                        className="complex-advantages__features-hint complex-advantages__features-hint--gift">Специальные&nbsp;условия
                        для&nbsp;иногородних</span>
                    </li>
                  </ul>
                </div>
                <div className="catalog-complex__item-content">
                  <div className="inner">
                    <div className="complex">ЖК "Новое Мурино"</div>
                    <div className="developer"><span className="text">ООО «Инвест-Строй»</span><img src="img/developer_logo.svg"
                        alt=""/></div>
                  </div>
                  <div className="catalog-complex__cost-block"><span className="cost-block__cost-from">2.4</span>-<span
                      className="cost-block__cost-to">7</span> млн. руб.</div>
                  <div className="catalog-container-wrap">
                    <div className="square-metr">78,6 тыс. - 107,2 тыс. руб/м2</div>
                    <button type="button" className="btn-phone"><img className="img-phone" src="img/icon-phone.svg" alt=""/><span
                        className="text">+7 Показать телефон</span></button>
                  </div>

                  <div className="address">Всеволжский р-н, п. Мурино</div>
                  <div className="metro"><img src="img/metro-el.svg" alt=""/><span className="metro__name">Девяткино</span><span
                      className="metro__distance">15 мин пешком</span></div>

                  <div className="catalog-complex-info-wrap">
                    <div className="flat-type studio">
                      <div className="flat-type__left-box">
                        Студия от <span className="flat-type__square"><span className="flat-type__square-value">26.5</span>
                          м<sup>2</sup></span>
                      </div>
                      <div className="flat-type__right-box">
                        <span className="flat-type__cost-from">2.4</span>
                        -<span className="flat-type__cost-to">2.8</span> млн. руб.
                      </div>
                    </div>
                    <div className="flat-type room">
                      <div className="flat-type__left-box">
                        1-комнатная кв. от <span className="flat-type__square"><span className="flat-type__square-value">26.5</span>
                          м<sup>2</sup></span>
                      </div>
                      <div className="flat-type__right-box">
                        <span className="flat-type__cost-from">2.4</span>
                        -<span className="flat-type__cost-to">2.8</span> млн. руб.
                      </div>
                    </div>
                    <div className="flat-type room">
                      <div className="flat-type__left-box">
                        2-комнатная кв. от <span className="flat-type__square"><span className="flat-type__square-value">26.5</span>
                          м<sup>2</sup></span>
                      </div>
                      <div className="flat-type__right-box">
                        <span className="flat-type__cost-from">2.4</span>
                        -<span className="flat-type__cost-to">2.8</span> млн. руб.
                      </div>
                    </div>
                    <div className="flat-type room">
                      <div className="flat-type__left-box">
                        3-комнатная кв. от <span className="flat-type__square"><span className="flat-type__square-value">26.5</span>
                          м<sup>2</sup></span>
                      </div>
                      <div className="flat-type__right-box">
                        <span className="flat-type__cost-from">2.4</span>
                        -<span className="flat-type__cost-to">2.8</span> млн. руб.
                      </div>
                    </div>
                  </div>
                  <div className="catalog-complex__description">
                    <p className="description">Неподалёку от Санкт-Петербурга, в городе Кудрово Всеволожского района, ООО
                      "Отделстрой" возводит довольно масштабный жилой комплекс с загадочным и красивым названием "Новый
                      Оккервиль". Удачно расположившись на 50 га живописного берега одноимённой реки, комплекс привлекает
                      разнообразием планировок (да ещё каким, более 200 вариантов квартир) и близостью (ближе некуда, 300 м
                      -
                      и Питер) к Северной столице. Что ещё интересного будет в "Новом Оккервиле", что - не очень, и куда
                      делся
                      старый - расскажем далее подробно. </p>
                    <p className="description">Неподалёку от Санкт-Петербурга, в городе Кудрово Всеволожского района, ООО
                      "Отделстрой" возводит довольно масштабный жилой комплекс с загадочным и красивым названием "Новый
                      Оккервиль". Удачно расположившись на 50 га живописного берега одноимённой реки, комплекс привлекает
                      разнообразием планировок (да ещё каким, более 200 вариантов квартир) и близостью (ближе некуда, 300 м
                      -
                      и Питер) к Северной столице. Что ещё интересного будет в "Новом Оккервиле", что - не очень, и куда
                      делся
                      старый - расскажем далее подробно. </p>
                  </div>

                  <button type="button" className="btn-phone"><img className="img-phone" src="img/icon-phone.svg" alt=""/><span
                      className="text">+7 Показать телефон</span></button>

                </div>
              </div>
            </div>
          </div>
          <div id="map"></div>
          <div className="map-footer">
            <button type='button' className="map-footer__btn-open-filter"><img src="img/icon-filter.svg" alt=""/><span
                className="close">&#10006;</span>Фильтр
              </button>
              <button type='button' className="map-footer__btn-open-list"><img src="img/filter-list.svg" alt=""/>Списком</button>
          </div>
        </div>
      </section>

  )
}

export default React.memo(MapModal);