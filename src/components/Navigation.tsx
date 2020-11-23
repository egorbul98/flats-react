import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';


import { ReactComponent as HeartIcon } from './../assets/img/icons/heart.svg';
type PropsType = {
    activeNav?:boolean
}
const Navigation:React.FC<PropsType> = ({activeNav}) => {
    
  return (
    <nav className={classNames("header-catalog__nav catalog-nav ", {"catalog-nav catalog-nav--active":activeNav})}>
            <NavLink to="/" exact className='catalog-nav__item'>Главная</NavLink>
            <NavLink to="/favorites" exact className='catalog-nav__item'><HeartIcon width="13" height="12"/> Избранное</NavLink>
        {/* <div
            className="catalog-nav__item catalog-nav__item-menu catalog-nav__item--margin-right">
            <a href="" className="link-menu">
                <span className="text">Полезное</span>
                <svg width="10" height="6"> <image width="10" height="6" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAQAAABQ+cdNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfjChIREw8AENF9AAAAZklEQVQI1y3LsQ3CMBRAwTNswARIbOACFkCRyCYUfxm7YJMgRSxACjZA8gRsgEwRulfcS6U4ucYLqNnNM5WOrzFm6mCyJZWjux0GzPi4pK7uPRzW3ds52oZosgUscjRS/5M6EePaP0QlGxXaqFHbAAAAAElFTkSuQmCC"/> </svg>
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
        </div> */}
        
    </nav>
  );
}

export default React.memo(Navigation);
