import React from 'react';

type PropsTypes = {}

const Modals : React.FC < PropsTypes > = ({}) => {

    return (
      <div>
        <section className="mortgage mortgage__modal modal modal--closed">
        <div className="mortgage__wrapper modal__wrapper">
          <header className="modal__header">
            <button type='button' className="modal__header-btn-close">&#10006;</button>
            <a href="index.html"><img className="modal__logo" src="img/logo.svg" width="80" height="46" alt="Логотип"/></a>
            <div className="modal__estate">
              <div className="mortgage__title-img">
                <picture>
                  <source type="image/webp" srcSet="img/devSlider-img1.webp"/>
    
                  <img className="modal__img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="320" height="220"/>
                </picture>
                <div className="mortgage__title-wrapper">
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
            <h3 className="modal__title">Подать заявки во все банки</h3>
            <button type='button' className="modal__close-btn"><img src="img/modal-close.svg" alt=""/></button>
          </div>
    
          <div className="modal__content mortgage">
            <form action="#" method="#" className="mortgage__form">
              <div className="mortgage__income">
                <label htmlFor="mortgage-income" className="mortgage__label">Месячный доход семьи</label>
                <div className="mortgage-field-wrapper">
                  <div className="mortgage-field">
                    <input readOnly className="mortgage__income-input" type="text" name="mortgage-income" id="mortgage-income"
                      placeholder="50 000" value="50000"/>
                    <input readOnly type="range" id='mortgage__income-range' className="mortgage__range" min="35000" max="100000"
                      value="50000" step="1000"/>
                  </div>
                  <span className="mortgage-field__val mortgage-income__rub">руб.</span>
                  <div className="mortgage-field-pins pins">
                    <div className="pins__item">35 000</div>
                    <div className="pins__item">50 000</div>
                    <div className="pins__item">65 000</div>
                    <div className="pins__item">80 000</div>
                    <div className="pins__item">100 000</div>
                  </div>
                </div>
    
              </div>
              <div className="mortgage__work">
                <label htmlFor="mortgage-work" className="mortgage__label">Общий трудовой стаж</label>
                <div className="mortgage-field-wrapper">
                  <div className="mortgage-field">
                    <input readOnly className="mortgage__work-input " type="text" name="mortgage-work" id="mortgage-work" placeholder="2"
                      value="2"/>
                    <input readOnly type="range" id='mortgage__work-range' className="mortgage__range" min="1" max="15" value="2"/>
                  </div>
                  <span className="mortgage-field__val mortgage-work__year">год</span>
                  <div className="mortgage-field-pins pins">
                    <div className="pins__item">1</div>
                    <div className="pins__item">3</div>
                    <div className="pins__item">5</div>
                    <div className="pins__item">7</div>
                    <div className="pins__item">9</div>
                    <div className="pins__item">11</div>
                    <div className="pins__item">13</div>
                    <div className="pins__item">15</div>
                  </div>
                </div>
    
              </div>
              <div className="mortgage__payment">
                <label htmlFor="mortgage-payment" className="mortgage__label">Первоначальный взнос</label>
                <div className="mortgage-field-wrapper">
                  <div className="mortgage-field">
                    <input readOnly className="mortgage__payment-input" type="text" name="mortgage-payment" id="mortgage-payment"
                      placeholder="500 000" value="500000"/>
                  </div>
                  <span className="mortgage-field__val mortgage-payment__rub">руб.</span>
                </div>
              </div>
    
              <div className="mortgage__capital">
                <p className="mortgage__capital-text">Наличие материнского капитала и субсидий</p>
                <div className="mortgage__capital-inner">
                  <input readOnly type="checkbox" id="mortgage-capital"></input>
                  <label htmlFor="mortgage-capital">Да</label>
                </div>
              </div>
              <div className="mortgage-footer">
                <div className="mortgage-chance-wrapper">
                  <div className="mortgage__chance">
                    <p className="mortgage__expectancy">Вероятность одобрения:</p>
                    <span className="mortgage__expectancy-value"><span className="mortgage__expectancy-value-wrap">65</span><span
                        className="mortgage__expectancy-percent">%</span></span>
                  </div>
    
                  <div className="mortgage__info">
                    <input readOnly type="text" required placeholder="Ваше имя"></input>
                    <input readOnly type="text" required placeholder="Ваш номер телефона"></input>
                  </div>
                </div>
    
                <div className="mortgage__info-box">
                  <b className="mortgage__security">Мы не передаем Ваши данные третьим лицам</b>
                  <small className="mortgage__form-invalid">Вы не заполнили поля «имя», «телефон»</small>
                </div>
              </div>
    
            </form>
          </div>
    
          <button type="submit" className="modal__btn pink__btn">Отправить</button>
    
        </div>
      </section>
    
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