import React, { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ComplexAuthorDescription from '../components/Complex/ComplexAuthorDescription';
import ComplexCharacteristics from '../components/Complex/ComplexCharacteristics';
import ComplexDocuments from '../components/Complex/ComplexDocuments';
import ComplexRating from '../components/Complex/ComplexRating';
import ComplexFlatsInfo from '../components/Complex/ComplexFlatsInfo';
import CreditCalculator from '../components/CreditCalculator';
import Footer from '../components/Footer';
import HeaderDeatailPage from '../components/HeaderDeatailPage';
import VideoSlider from '../components/VideoSlider';
import ComplexMap from '../components/Complex/ComplexMap';
import Reviews from '../components/Reviews/Reviews';


import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailComplex } from '../redux/actions/complexesActions';
import { AppStateType } from '../redux/reducers/rootReducer';
import ComplexSliderDetail from '../components/Complex/ComplexSliderDetail';
import Modal from '../components/Modal';
import AdviceBoxSlider from '../components/AdviceBoxSlider';
import { ComplexLikeType } from '../mainTypes';

type PropsTypes = {

}
const onScrollTop = () => {
  window.scrollTo(0, 0);
}
const DetailsComplex: React.FC<PropsTypes> = ({ }) => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchDetailComplex(id));
  }, [id, dispatch]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const { complex } = useSelector(({complexes}:AppStateType) => {
    return {
      complex: complexes.detailComplex
    }
  })
  
  if (!complex) {
    return null
  }

 console.log("render");
 

  return (
  
    <div className="detail-page">
      
        <HeaderDeatailPage />
        <ComplexSliderDetail {...complex}/>
        
        <ComplexFlatsInfo/> 
        {/* <VideoSlider /> */}
        
        <button type="button" id='btnOpenExcursionModal' className="expectation__btn pink__btn">Записаться на
          экскурсию</button>
    
        {/* <ComplexCharacteristics />  */}
      <ComplexRating complexName={complex.name} rating={ complex.complexDetail?.rating}/>
       
      <ComplexAuthorDescription descriptionObj={ complex.complexDetail?.authorDesc}/>
        
        <ComplexDocuments/>
        <CreditCalculator />
        
      <section className="route">
          <div className="route__wrapper">
          <h2 className="route__title">Карта проезда к { complex.name }</h2>
          </div>
          <div className="route__map" id="map">
                <ComplexMap coords={complex.coords}/>
          </div>
      </section>
        
      

      <Reviews complexId={complex.id}  />
        
      <div className="analog__wrapper">
        <h2 className="analog__title">Подобные ЖК</h2>
      </div>
      <AdviceBoxSlider className="analog">
          {complex.complexDetail && complex.complexDetail?.complexLike.map((item, index) => {
            return <SlideItem key={ index + "_analog"} item={ item } />
          })}
        </AdviceBoxSlider>
      <Link to="/" className="analog__btn light__btn" onClick={onScrollTop}>Смотреть все предложения</Link>
      
      
      
  <section className="mortgage mortgage__modal modal modal--closed">
    <div className="mortgage__wrapper modal__wrapper">
      <header className="modal__header">
        <button type='button' className="modal__header-btn-close">&#10006;</button>
        <a href="index.html"><img className="modal__logo" src="img/logo.svg" width="80" height="46" alt="Логотип"/></a>
        <div className="modal__estate">
          <div className="mortgage__title-img">
            {/* <picture>
              <source type="image/webp" srcset="img/devSlider-img1.webp">

              <img className="modal__img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="320" height="220">
            </picture> */}
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
                <input className="mortgage__income-input" type="text" name="mortgage-income" id="mortgage-income"
                  placeholder="50 000" value="50000"/>
                <input type="range" id='mortgage__income-range' className="mortgage__range" min="35000" max="100000"
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
                <input className="mortgage__work-input " type="text" name="mortgage-work" id="mortgage-work" placeholder="2" value="2"/>
                <input type="range" id='mortgage__work-range' className="mortgage__range" min="1" max="15" value="2"/>
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
                <input className="mortgage__payment-input" type="text" name="mortgage-payment" id="mortgage-payment" placeholder="500 000" value="500000"/>
              </div>
              <span className="mortgage-field__val mortgage-payment__rub">руб.</span>
            </div>
          </div>

          <div className="mortgage__capital">
            <p className="mortgage__capital-text">Наличие материнского капитала и субсидий</p>
            <div className="mortgage__capital-inner">
              <input type="checkbox" id="mortgage-capital"/>
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
                <input type="text" required placeholder="Ваше имя"/>
                <input type="text" required placeholder="Ваш номер телефона"/>
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
            {/* <picture>
              <source type="image/webp" srcset="img/devSlider-img1.webp">

              <img className="modal__img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="320" height="220">
            </picture> */}
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
            <select className='excursion__select-time' name="" id="excursion__select-time">
              <option value="9">9:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option selected value="13">13:00</option>
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
              <input className="excursion__form-input" type="text" placeholder="Ваше имя"/>
              <input className="excursion__form-input" type="text" placeholder="Ваш номер телефона"/>
            </div>
            <div className="date-info">
              <span className="date">19.09</span>
              <span className="time">13:00</span>
            </div>

            <input type="submit" className="modal__btn pink__btn" value="Записаться"/>
          </form>

        </div>
      </div>
    </div>

  </section>

  <section className="consultation consultation__modal modal modal--closed">

    <div className="consultation__wrapper modal__wrapper">
      <header className="modal__header">
        <button type='button' className="modal__header-btn-close">&#10006;</button>
        <a href="index.html"><img className="modal__logo" src="img/logo.svg" width="80" height="46" alt="Логотип"/></a>
        <div className="modal__estate">
          {/* <picture>
            <source type="image/webp" srcset="img/devSlider-img1.webp">

            <img className="modal__img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="320" height="220">
          </picture> */}
          <h2 className="modal__img-title">ЖК «Северные высоты»</h2>
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
        <h3 className="modal__title">Получить консультацию юриста</h3>
        <button type="button" className="modal__closeBtn"><span className="visually-hidden">Закрыть окно</span></button>
      </div>

      <p className="modal__text">Оставьте Ваши контактные данные</p>

      <div className="modal__content">
        <form method="#" action="#" className="consultation__form">
          <input className="consultation__form-input" type="text" placeholder="Ваше имя" required/>
          <input className="consultation__form-input" type="text" placeholder="Ваш номер телефона" required/>

          <input type="submit" className="modal__btn modal__btn--consultation pink__btn" placeholder="Записаться"/>
        </form>
      </div>
    </div>
  </section>

  <section className="catalog catalog__modal modal modal--catalog modal--closed" data-flats='0'>
    <div className="catalog__wrapper">
      <div className="catalog__content">
        <header className="modal__header">
          <button type='button' className="modal__header-btn-close">&#10006;</button>
          <a href="index.html"><img className="modal__logo" src="img/logo.svg" width="80" height="46" alt="Логотип"/></a>
          <div className="modal__estate">
            <div className="modal-header__title-img">
              {/* <picture>
                <source type="image/webp" srcset="img/devSlider-img1.webp">

                <img className="modal__img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="320" height="220">
              </picture> */}
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
        <div className="modal__content">
          <div className="catalog-title-box">
           
          </div>

          <div id='catalog-list-table' className="catalog-list-table">
           

          </div>
          <div className="catalog-pagination">
            <div className="catalog-pagination__list hidden">

            </div>
            <button type="button" className="btn-show-more pink__btn">Показать еще</button>

          </div>
        </div>
        </div>
        </div>
  </section>

  <section className="feedback__modal modal modal--closed">
    <div className="feedback__modal-wrapper modal__wrapper">
      <div className="modal__title-box">
        <h3 className="modal__title feedback__modal-title">Добавить отзыв</h3>
        <button type="button" className="modal__closeBtn feedback__modal-closeBtn">
          <span className="visually-hidden">Закрыть окно</span>
        </button>
      </div>

      <div className="modal__content">
        <form method="#" action="#" className="feedback__modal-form">
          <input className="feedback__modal-input" type="text" placeholder="Ваше имя" required/>
          {/* <textarea className="feedback__modal-textarea" type="textarea" placeholder="Текст отзыва" cols="8"
            required></textarea> */}
          <input type="submit" className="modal__btn pink__btn" value="Добавить"/>
        </form>
      </div>
    </div>
  </section>

  <section className="analog__modal modal modal--closed">
    <div className="analog__modal-wrapper modal__wrapper">
      <ul className="analog__list analog__modal-slider" id="analogModal">
        
      </ul>
      <button className="analog__modal-closeBtn pink__btn">Закрыть</button>
    </div>
  </section>

  <Footer />
  </div>
   
  )
}

type PropsTypeSlide = {
  item: ComplexLikeType
}

const SlideItem: React.FC<PropsTypeSlide> = React.memo(({ item }) => {
  
  return (
    <Link to={`/complex/${item.id}`} onClick={onScrollTop}>
      <div className="analog__item">
        <div className="analog__item-image-wrap">
          <img className="analog__item-image" src={item.imgSrc} alt="подобный ЖК" width="110" height="80" />
          <h3 className="analog__item-title">{ item.name }</h3>
        </div>
        <div className="analog__item-box">
          <address className="analog__item-address">
            <p className="analog__item-metro">{item.metro}, {item.metroDistance} мин. пешком</p>
            <p className="analog__item-street">{item.address}</p>
          </address>
        </div>
      </div>
    </Link>
  )
})

export default DetailsComplex;