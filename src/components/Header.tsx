
import React from 'react';
import classNames from 'classnames';

import logo from './../assets/img/logo.svg';
import btnOpen from './../assets/img/btn-open-nav.svg';
import {ReactComponent as HeartIcon} from './../assets/img/icons/heart.svg';
import { useSwitchRegion } from '../handlers/hooks/useSwitchRegion';

type PropsTypes = {}

const Header : React.FC < PropsTypes > = ({}) => {
    
    const [region, onHandleClick] = useSwitchRegion();

    return (
        <header className="header-catalog">
            <div className="header-catalog__wrap">
                <div className="header-catalog__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="header-catalog__right-box">
                    <div className="header-catalog__cities">
                        <button
                            type="button"
                            data-city='spb'
                            className={classNames("header-catalog__cities-btn pink__btn",{"header-catalog__cities-btn--active":region==="SP"})} onClick={()=>onHandleClick("SP")}>Санкт-Петербург и ЛО</button>
                        <button
                            type="button"
                            data-city='moscow'
                            className={classNames("header-catalog__cities-btn pink__btn",{"header-catalog__cities-btn--active":region==="MOS"})} onClick={()=>onHandleClick("MOS")}>Москва и МО</button>
                    </div>
                    <nav className="header-catalog__nav catalog-nav ">
                        <div className="catalog-nav__item catalog-nav__item--active">
                            <a className='link' href="">Главная</a>
                        </div>
                        <div className="catalog-nav__item">
                            <a className='link' href="">Видеобзоры</a>
                        </div>
                        <div className="catalog-nav__item">
                            <a className='link' href="">Застройщики</a>
                        </div>
                        <div className="catalog-nav__item">
                            <a className='link' href="">Акции и скидки</a>
                        </div>
                        <div
                            className="catalog-nav__item catalog-nav__item-menu catalog-nav__item--margin-right">
                            <a href="" className="link-menu">
                                <span className="text">Полезное</span>
                                <svg width="10" height="6">
                                    <image
                                        width="10"
                                        height="6"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAQAAABQ+cdNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfjChIREw8AENF9AAAAZklEQVQI1y3LsQ3CMBRAwTNswARIbOACFkCRyCYUfxm7YJMgRSxACjZA8gRsgEwRulfcS6U4ucYLqNnNM5WOrzFm6mCyJZWjux0GzPi4pK7uPRzW3ds52oZosgUscjRS/5M6EePaP0QlGxXaqFHbAAAAAElFTkSuQmCC"/>
                                </svg>
                            </a>

                            <div className="catalog-nav__drop">
                                <div className="catalog-nav__drop-inner">
                                    <div className="catalog-nav__item">
                                        <a className='link' href="">Что-то полезное 1</a>
                                    </div>
                                    <div className="catalog-nav__item">
                                        <a className='link' href="">Что-то полезное 2</a>
                                    </div>
                                    <div className="catalog-nav__item">
                                        <a className='link' href="">Что-то полезное 3</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="catalog-nav__item">
                            <a href=""><HeartIcon width="13" height="12"/> Избранное</a>
                        </div>
                    </nav>
                    <div className="btn-open-nav">
                        <img className='img-open-nav' src={btnOpen} alt=""/>
                    </div>
                </div>
               
            </div>
            <hr className="hr"/>
        </header>
    )
}

export default React.memo(Header);