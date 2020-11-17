import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import { ComplexeType } from '../../mainTypes';
import Select from '../miniComponents/Select';

import iconHeart from '../../assets/img/slide-heart.svg';
import iconBuild from '../../assets/img/slide-build.svg';
import iconDevLogo from '../../assets/img/developer_logo.svg';
import iconMetro from '../../assets/img/metro-el.svg';
import iconPlaceholderRed from '../../assets/img/placeholder-red.svg';
import {ReactComponent as SvgFeatureSale} from '../../assets/img/icon-feature_sale.svg';
import {ReactComponent as SvgFeatureDeal} from '../../assets/img/icon-feature_deal.svg';
import {ReactComponent as SvgFeatureGift} from '../../assets/img/icon-feature_gift.svg';
import {ReactComponent as SvgFeatureDecor} from '../../assets/img/icon-feature_decor.svg';
import {ReactComponent as SvgFeatureBus} from '../../assets/img/icon-bus.svg';

import ButtonPhone from '../miniComponents/ButtonPhone';
import IconAdvantage from '../miniComponents/IconAdvantage';
import { getFlatsGroupByRooms } from '../../handlers/complexesHandlers';
import ComplexMap from '../Complex/ComplexMap';
import SlickArrowLeft from '../Slider/SlickArrowLeft';
import SlickArrowRight from '../Slider/SlickArrowRight';


type PropsTypeSlide = {
    srcImage: string
}

const SlideItemComplex: React.FC<PropsTypeSlide> = ({ srcImage }) => {
    return (
        <div className="catalog-complex__slide">
            <img className='lazy' src={srcImage} alt="img"/>
            <div className="catalog-complex__slide-icons">
                <img src={iconHeart} alt="img"/>
                <img src={iconBuild} alt="img"/>
            </div>
        </div>
    )
}

type propTypes = {
    mini?: boolean, //true - некоторые элементы в разметке будут отсутсовать,
    display?: string
}
const ComplexCart: React.FC<ComplexeType & propTypes> = ({ mini, display, ...complex }) => {
    const [currentSlide, setCurrentSlide] = React.useState(1);
    const [openMap, setOpenMap] = React.useState(false);
    
    React.useEffect(() => { setOpenMap(false); }, [display]); //закрываем карту, если отображение элементов изменилось
    
    const settingsSlider = { //настройки слайдера
        arrows: true,
        prevArrow: <SlickArrowLeft classNamesBtn="catalog-complex__slider-prev-btn"/>,
        nextArrow: <SlickArrowRight classNamesBtn="catalog-complex__slider-next-btn"/>,
        afterChange: (currentSlide:number) => {
            setCurrentSlide(currentSlide+1);
        }
    }

    const onToggleOpenComplexMap = () => {
        setOpenMap(!openMap);
    }

    const deadlinesItems = React.useMemo(()=>complex.deadline.map((item) => { return "корпус "+ item.corpus + ", " + item.year + "г." }), [complex.deadline]); //возвращаем массив с элементами сроков сдач квартир. Обернули в useMemo, потому что просиходил ререндер select'a при простом свайпе слайдера
    
    const flatsGroupByRooms = React.useMemo(()=>getFlatsGroupByRooms(complex.flats), [complex.flats]); //возвращаем массив сгруппированных по кол-ву комнат квартир
   
    const flatsTypesBlocks = flatsGroupByRooms.map((item, index) => {
        return (
            <div className="flat-type room" key={index + "_" + item.room}>
                <div className="flat-type__left-box">
                    {item.room} от
                    <span className="flat-type__square">
                        <span className="flat-type__square-value"> {item.minSquare}</span>
                        м<sup>2</sup>
                    </span>
                </div>
                <div className="flat-type__right-box">
                    <span className="flat-type__cost-from">{(item.minCost / 1000000).toFixed(1)} </span>
                    -<span className="flat-type__cost-to"> {(item.maxCost / 1000000).toFixed(1)} </span>
                    млн. руб.
                </div>
            </div>
        )
    });

    return (
        <div className="catalog-complex__item">
            <div className="catalog-complex__item-header">
                
                <div className="inner-wrap">
                    
                    {openMap && <div className="catalog-complex__item-map">
                    <ComplexMap coords={complex.coords}/>
                        </div>}
                    
                        <Slider className="catalog-complex__slider" {...settingsSlider}>
                                {complex.images && complex.images.map((itemPath, index) => {
                                    return <SlideItemComplex key={index} srcImage={window.location.origin + itemPath}/>
                                })}
                        </Slider>
               </div>
                <div className="catalog-complex__slider-counter">{currentSlide}/{complex.images.length}</div>
               

                <div className="complex-advantages__features-list">
                    <IconAdvantage tooltipText="Скидка партнерам" className="complex-advantages__features-item complex-advantages__features-item--sale" classNameTooltip="complex-advantages__features-hint--sale">
                        <SvgFeatureSale />
                    </IconAdvantage>

                    <IconAdvantage tooltipText="Безопасная сделка" className="complex-advantages__features-item complex-advantages__features-item--deal" classNameTooltip="complex-advantages__features-hint--deal">
                        <SvgFeatureDeal />
                    </IconAdvantage>

                    <IconAdvantage tooltipText="Приемка в подарок" className="complex-advantages__features-item complex-advantages__features-item--gift" classNameTooltip="complex-advantages__features-hint--gift">
                        <SvgFeatureGift />
                    </IconAdvantage>

                    <IconAdvantage tooltipText="Сертификат на отделку" className="complex-advantages__features-item complex-advantages__features-item--decor" classNameTooltip="complex-advantages__features-hint--decor">
                        <SvgFeatureDecor />
                    </IconAdvantage>

                    <IconAdvantage tooltipText="Специальные условия для иногородних" className="complex-advantages__features-item complex-advantages__features-item--conditions" classNameTooltip="complex-advantages__features-hint--conditions">
                        <SvgFeatureBus />
                    </IconAdvantage>

                </div>
            
                <div className="catalog-complex__buttons-wrap catalog-complex__item-header-buttons">
                 <Link to={"complex/"+complex.id} className="catalog-complex__btn-more pink__btn">Подробнее</Link>
                 <button type='button' className="catalog-complex__btn-show-map pink__btn" onClick={onToggleOpenComplexMap}><img src={iconPlaceholderRed} alt=""/>На карте</button>
                </div>
            </div>
            <div className="catalog-complex__item-content">
                <div className="inner">
                    <div className="complex">{complex.name}</div>
                    <div className="developer">
                        <span className="text">{complex.developer}</span>
                        <img src={iconDevLogo} alt=""/>
                    </div>
                </div>
                <div className="catalog-complex__cost-block">
                    <span className="cost-block__cost-from">{complex.minCost && (complex.minCost/1000000).toFixed(1)}</span>-<span className="cost-block__cost-to">{complex.maxCost&&(complex.maxCost/1000000).toFixed(1)}</span>
                    млн. руб.</div>
                <div className="catalog-container-wrap">
                    <div className="square-metr">{complex.minCostSquare && complex.minCostSquare}
                        тыс. - {complex.maxCostSquare && complex.maxCostSquare}
                        тыс. руб/м2</div>
                    {mini ? null : <ButtonPhone>{complex.tel}</ButtonPhone>}
                </div>
                <div className="address">{complex.address}. {complex.area}</div>
                <div className="metro">
                    <img src={iconMetro} alt=""/>
                    <span className="metro__name">{complex.metro}</span>
                    <span className="metro__distance"> {complex.metroDistance} мин пешком</span>
                </div>

                <Select 
                    classNames="filter-field complex-field-deadlines" 
                    placeholder="Срок сдачи:" 
                    items={deadlinesItems}
                />
            
                <div className="catalog-complex-info-wrap">
                    {flatsTypesBlocks}
                </div>
                <div className="catalog-complex__description">
                    <p className="description">{complex.description}</p>
                </div>
                <div className="catalog-complex__buttons-wrap">
                    {mini ?
                        <>
                        <ButtonPhone>{complex.tel}</ButtonPhone>
                        <Link to={"complex/"+complex.id} className="btn-details pink__btn">Подробнее</Link>
                        </>
                        : <>
                    <Link to={"complex/"+complex.id} className="catalog-complex__btn-more pink__btn">Подробнее</Link>
                    <button type='button' className="catalog-complex__btn-show-map pink__btn" onClick={onToggleOpenComplexMap}><img src={iconPlaceholderRed} alt="" />На карте</button>
                    </>
                    }
                    
                </div>
            </div>
        </div>

    )
}

export default React.memo(ComplexCart);