import React from 'react';

type PropsTypes = {}

const CreditCalculator : React.FC < PropsTypes > = () => {

    return (
      <section className="credit" id="credit">
      <div className="credit__wrapper">
        <h2 className="credit__title">Ипотека от банков</h2>
  
        <div className="credit__calculator calculator">
          <div className="calculator__wrapper">
            <h2 className="calculator__title">Калькулятор</h2>
            <small className="calculator__description">Введите параметры для расчета ежемесячного платежа</small>
  
            <form action="" method="" className="calculator__form">
              <div className="calculator__form-box">
                <label htmlFor="contribution" className="calculator__form-label">Сумма кредита</label>
                <input readOnly type="text" id="contribution" placeholder="руб." value=""/>
              </div>
              <div className="calculator__form-box">
                <label htmlFor="rate" className="calculator__form-label">Ставка</label>
                <input readOnly type="text" id="rate" placeholder="%" value=""/>
              </div>
              <div className="calculator__form-box">
                <label htmlFor="time" className="calculator__form-label">Срок</label>
                <input readOnly type="text" id="time" className='inputTi' placeholder="Кол-во лет" value=""/>
              </div>
            </form>
  
            <p className="calculator__text">Ваш ежемесячный платеж составит:<b className="calculator__result">0 руб.</b>
            </p>
            <button type="submit" id='btnOpenMortgage' className="calculator__btn pink__btn openModal__btn">Подать заявки во
              все банки</button>
          </div>
        </div>
  
      </div>
    </section>
  
    )
}

export default CreditCalculator;