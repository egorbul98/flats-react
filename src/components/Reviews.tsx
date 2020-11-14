import React from 'react';

type PropsTypes = {
  
}

const Reviews : React.FC < PropsTypes > = ({}) => {

  return (
    <section className="feedback" id="feedback">
      <div className="feedback__wrapper">
        <h2 className="feedback__title">Отзывы</h2>
        <div className="feedback__toggler">
          <a href="javascript: void(0)"
            className="feedback__toogle-link feedback__toogle-link--estate feedback__toogle-link--active">О
            комплексе</a>
          <a href="javascript: void(0)" className="feedback__toogle-link feedback__toogle-link--developer">О застройщике</a>
        </div>
        <div className="feedback__wrap-inner">
        <div className="feedback__inner">

        </div>
      </div>
        <button type="button" className="feedback__add-btn light__btn">Добавить отзыв</button>
        <button type="button" className="feedback__show-btn show__btn"><span className="text">Показать все отзывы</span></button>
        <button type="button" className="feedback__modalBtn hidden"><span className="visually-hidden">закрыть</span></button>
      </div>
    </section>
    )
}

export default React.memo(Reviews);

   