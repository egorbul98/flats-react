import React from 'react';

type PropsTypes = {}

const Modals : React.FC < PropsTypes > = ({}) => {

    return (
      <div>
        
      <section className="excursion excursion__modal modal modal--closed">
      
      <div className="excursion__wrapper modal__wrapper">
        <header className="modal__header">
          <button type='button' className="modal__header-btn-close">&#10006;</button>
          <a href="index.html"><img className="modal__logo" src="img/logo.svg" width="80" height="46" alt="Логотип"/></a>
          <div className="modal__estate">
            <div className="modal-header__title-img">
              <picture>
                <source type="image/webp" srcSet="img/devSlider-img1.webp"/>
  
                <img className="modal__img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="320" height="220"/>
              </picture>
              <div className="modal-header__title-wrapper">
                <h2 className="modal__title">ЖК «Северные высоты»</h2>
              </div>
            </div>
  
            <div className="modal__description-box">
              <address className="modal__address">
                <p className="modal__address-metro">Беговая, 21 мин. пешком</p>
                <p className="modal__address-street">Приморский район, Мебельная улица, 19к2</p>
              </address>
              <div className="modal__info">
                <p className="modal__info-name">ООО «Инвест-Строй»</p>
                <span className="modal__info-divider"></span>
                <p className="modal__info-type">Под ключ</p>
                <a href="tel:8(800)1234556" className="modal__info-phone"><b>8 (800) 123 45 56</b></a>
              </div>
            </div>
          </div>
        </header>
  
        <div className="modal__title-box">
          <h3 className="modal__title">Записаться на экскурсию</h3>
          <button type="button" className="modal-close-btn">
            <img className='modal__close-img' src="img/modal-close.svg" alt="закрыть"/>
          </button>
        </div>
  
        <p className="modal__text">Выберите удобную дату и время</p>
  
        <div className="modal__content">
          <div className="modal__content-left ">
            <div id="hasDatepicker">
            </div>
  
            <div className="excursion-field">
              <div className="excursion__select-arrow">
                <img src="img/arrow__down-input.svg"/>
              </div>
                  <select defaultValue="13" onChange={()=>console.log("select")} className='excursion__select-time' name="" id="excursion__select-time">
                <option value="9">9:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
              </select>
            </div>
          </div>
          <div className="modal__content-right">
            <form method="#" action="#" className="consultation__form">
              <div className="consultation__form-fields">
                <input readOnly className="excursion__form-input" type="text" placeholder="Ваше имя"/>
                <input readOnly className="excursion__form-input" type="text" placeholder="Ваш номер телефона"/>
              </div>
              <div className="date-info">
                <span className="date">19.09</span>
                <span className="time">13:00</span>
              </div>
  
              <input readOnly type="submit" className="modal__btn pink__btn" value="Записаться"/>
            </form>
  
          </div>
        </div>
      </div>
  
      
        </section>
    </div>
  )
}

export default React.memo(Modals);