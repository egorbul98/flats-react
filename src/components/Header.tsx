
import React from 'react';

type PropsTypes = {}

const Header : React.FC < PropsTypes > = ({}) => {

    return (
        <header className="header-catalog">
            <img
                className='lazy'
                data-src="img/close__btn.png"
                src="img/content-item-img.png"
                alt=""/>

            <div className="header-catalog__wrap">
                <div className="header-catalog__logo">
                    <img src="img/logo.svg" alt="logo"/>
                </div>
                <div className="header-catalog__right-box">
                    <div className="header-catalog__cities">
                        <button
                            type="button"
                            data-city='spb'
                            className="header-catalog__cities-btn pink__btn header-catalog__cities-btn--active">Санкт-Петербург и ЛО</button>
                        <button
                            type="button"
                            data-city='moscow'
                            className="header-catalog__cities-btn pink__btn">Москва и МО</button>
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
                            <svg width="13" height="12">
                                <use xlinkHref="#heart"></use>
                            </svg>
                            <a href="">Избранное</a>
                        </div>
                    </nav>
                    <div className="btn-open-nav">
                        <img className='img-open-nav' src="img/btn-open-nav.svg" alt=""/>
                    </div>
                </div>
                <hr className="hr"/>
            </div>
        </header>
    )
}

export default Header;