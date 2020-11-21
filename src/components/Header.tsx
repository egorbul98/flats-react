
import React from 'react';
import classNames from 'classnames';

import logo from './../assets/img/logo.svg';
import btnOpen from './../assets/img/btn-open-nav.svg';
import { useSwitchRegion } from '../handlers/hooks/useSwitchRegion';
import Navigation from './Navigation';

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
                    <Navigation/>
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