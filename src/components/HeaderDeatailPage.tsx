import React from 'react';
import classNames from 'classnames';
import logo from './../assets/img/logo.svg';
type PropsTypes = {
  
}

const HeaderDeatailPage : React.FC < PropsTypes > = ({}) => {

  const [activeMenu, setActiveMenu] = React.useState(false);

  const onToggleMenu = () => {
    setActiveMenu(!activeMenu)
  }
  return (
    <div>
      <header className="header main-header" id="main-header">
        <div className="main-header__wrapper" >
        <img className="main-header__logo logo" src={logo} width="80" height="46" alt="Логотип"/>
        <nav className="main-nav scrollLink">
          <button className="main-nav__toggle" type="button" onClick={onToggleMenu}><span className="visually-hidden" >Открыть меню</span></button>
          <div className={ classNames("main-nav__wrapper", {"active":activeMenu})}>
            <ul className="main-nav__list main-nav--nojs">
              <li className="main-nav__item">
                <a href="#flats" className="main-nav__link">Подобрать квартиру</a>
              </li>
              <li className="main-nav__item">
                <a href="#description" className="main-nav__link">Характеристики комплекса</a>
              </li>
              <li className="main-nav__item">
                <a href="#feedback" className="main-nav__link">Отзывы</a>
              </li>
              <li className="main-nav__item">
                <a href="#blog" className="main-nav__link">Авторское описание</a>
              </li>
              <li className="main-nav__item">
                <a href="#documents" className="main-nav__link">Документы</a>
              </li>
              <li className="main-nav__item">
                <a href="#credit" className="main-nav__link">Ипотека</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    
    </div>  
    )
}

export default React.memo(HeaderDeatailPage);

   