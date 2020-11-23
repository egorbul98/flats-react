import React from 'react';
import classNames from 'classnames';
import logo from './../assets/img/logo.svg';
//@ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
        <img className="main-header__logo logo" src={window.location.origin+logo} width="80" height="46" alt="Логотип"/>
        <nav className="main-nav scrollLink">
          <button className="main-nav__toggle" type="button" onClick={onToggleMenu}><span className="visually-hidden" >Открыть меню</span></button>
          <div className={ classNames("main-nav__wrapper", {"active":activeMenu})}>
            <ul className="main-nav__list main-nav--nojs">
              <li className="main-nav__item">
                <AnchorLink href="#flats" className="main-nav__link">Подобрать квартиру</AnchorLink>
              </li>
              <li className="main-nav__item">
                <AnchorLink href="#description" className="main-nav__link">Характеристики комплекса</AnchorLink>
              </li>
              <li className="main-nav__item">
                <AnchorLink href="#blog" className="main-nav__link">Авторское описание</AnchorLink>
                </li>
                <li className="main-nav__item">
                <AnchorLink href="#feedback" className="main-nav__link">Отзывы</AnchorLink>
              </li>
              <li className="main-nav__item">
                <AnchorLink href="#documents" className="main-nav__link">Документы</AnchorLink>
              </li>
              <li className="main-nav__item">
                <AnchorLink href="#credit" className="main-nav__link">Ипотека</AnchorLink>
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

   