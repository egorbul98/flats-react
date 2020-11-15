import React from 'react';

type PropsTypes = {
  
}

const ComplexFlatsInfo : React.FC < PropsTypes > = ({}) => {

  return (
    <section className="flats" id="flats">
      <div className="flats__wrapper">
    
      <ul className="flats__list">
        <li className="flats__item">
          <div className="flats__item-box">
            <p className="flats__text">1-комн. кв
              <span className="flats__text--area">от&nbsp;<span className="flat-area">29</span>&nbsp;м2</span>
              <span className="flats__text--price">от&nbsp;<span className="flat-price">2 000 030</span>&nbsp;руб.</span>
            </p>
            <a href="#" className="flats__link flats__modalBtn" data-flats="1"><span
                className="flat-count">19</span>&nbsp;в&nbsp;продаже</a>
          </div>
        </li>
        <li className="flats__item">
          <div className="flats__item-box">
            <p className="flats__text">2-комн. кв
              <span className="flats__text--area">от&nbsp;<span className="flat-area">35</span>&nbsp;м2</span>
              <span className="flats__text--price">от&nbsp;<span className="flat-price">2 500 030</span>&nbsp;руб.</span>
            </p>
            <a href="#" className="flats__link flats__modalBtn" data-flats="2"><span
                className="flat-count">7</span>&nbsp;в&nbsp;продаже</a>
          </div>
        </li>
        <li className="flats__item">
          <div className="flats__item-box">
            <p className="flats__text">3-комн. кв
              <span className="flats__text--area">от&nbsp;<span className="flat-area">59</span>&nbsp;м2</span>
              <span className="flats__text--price">от&nbsp;<span className="flat-price">3 900 030</span>&nbsp;руб.</span>
            </p>
            <a href="#" className="flats__link flats__modalBtn" data-flats="3"><span
                className="flat-count">4</span>&nbsp;в&nbsp;продаже</a>
          </div>
        </li>
        <li className="flats__item">
          <div className="flats__item-box">
            <p className="flats__text">Студия
              <span className="flats__text--area">от&nbsp;<span className="flat-area">30</span>&nbsp;м2</span>
              <span className="flats__text--price">от&nbsp;<span className="flat-price">2 100 030</span>&nbsp;руб.</span>
            </p>
            <a href="#" className="flats__link flats__modalBtn" data-flats="4"><span
                className="flat-count">2</span>&nbsp;в&nbsp;продаже</a>
          </div>
        </li>
      </ul>
      
    </div>
  </section>

    )
}

export default React.memo(ComplexFlatsInfo);

   