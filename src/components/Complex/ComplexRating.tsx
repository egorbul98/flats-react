import React from 'react';

type PropsTypes = {
  
}

const ComplexRating : React.FC < PropsTypes > = ({}) => {

  return (
    <section className="rating">
      <div className="rating__wrapper">
        <h2 className="rating__title">Рейтинг ЖК «Северные высоты»</h2>
        <small className="rating__text">Рейтинг составлен на основании отзывов с форумов дольщиков.</small>
        <ul className="rating__list">

          <li className="rating__list-item" data-aos="zoom-in">
            <div className="rating__list-figure rating__list-figure--kids">
              <svg width="46" height="33">
                <use xlinkHref="#icon-balancer"></use>
              </svg>
              <span className="rating__value rating__value--kids">6,7</span>
              <div className="rating__list-border" data-aos="border-pink"></div>
            </div>
            Для детей
          </li>
          <li className="rating__list-item" data-aos="zoom-in" data-aos-delay="200">
            <div className="rating__list-figure rating__list-figure--infrastructure">
              <svg width="40" height="40">
                <use xlinkHref="#icon-infrastructure"></use>
              </svg>
              <span className="rating__value rating__value--infrastructure">6,7</span>
              <div className="rating__list-border" data-aos="border-orange" data-aos-delay="200"></div>
            </div>
            Инфраструктура
          </li>
          <li className="rating__list-item" data-aos="zoom-in" data-aos-delay="300">
            <div className="rating__list-figure rating__list-figure--district">
              <svg width="41" height="41">
                <use xlinkHref="#icon-compass"></use>
              </svg>
              <span className="rating__value rating__value--district">6,3</span>
              <div className="rating__list-border" data-aos="border-lightblue" data-aos-delay="300"></div>
            </div>
            Район
          </li>
          <li className="rating__list-item" data-aos="zoom-in" data-aos-delay="400">
            <div className="rating__list-figure rating__list-figure--safety">
              <svg width="28" height="37">
                <use xlinkHref="#icon-lock"></use>
              </svg>
              <span className="rating__value rating__value--safety">5</span>
              <div className="rating__list-border" data-aos="border-green" data-aos-delay="400"></div>
            </div>
            Безопасность
          </li>
          <li className="rating__list-item" data-aos="zoom-in" data-aos-delay="500">
            <div className="rating__list-figure rating__list-figure--transport">
              <svg width="44" height="29">
                <use xlinkHref="#icon-bus"></use>
              </svg>
              <span className="rating__value rating__value--transport">4.6</span>
              <div className="rating__list-border" data-aos="border-blue" data-aos-delay="500"></div>
            </div>
            Транспорт
          </li>
          <li className="rating__list-item" data-aos="zoom-in" data-aos-delay="600">
            <div className="rating__list-figure rating__list-figure--house">
              <svg width="39" height="39">
                <use xlinkHref="#icon-hotel"></use>
              </svg>
              <span className="rating__value rating__value--house">3.2</span>
              <div className="rating__list-border" data-aos="border-violet" data-aos-delay="600"></div>
            </div>
            Квартира/дом
          </li>
        </ul>
        <div className="rating__average-container">
          <span className="rating__average-line rating__average-line--left"></span>
          <div className="rating__average-box">
            <b className="rating__average-rating">Средняя оценка</b>
            <b className="rating__average-building">ЖК «Северные высоты»</b>
          </div>
          <span className="rating__average-value">5.4</span>
          <span className="rating__average-line rating__average-line--right"></span>
        </div>
      </div>
    </section>
    
    )
}

export default React.memo(ComplexRating);

   