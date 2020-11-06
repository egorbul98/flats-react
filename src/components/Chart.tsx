import React from 'react';

type PropsTypes = {}

const Chart : React.FC < PropsTypes > = ({}) => {

    return (
      <section className="chart">
    <div className="chart__wrapper">

      <div className="chart__box">
        <h2 className="chart__title">Изменение цен за 1 м2 (тыс. руб)</h2>
        <div className="chart__button-box">
          <button type="button" className="chart__btn chart__btn--studio" data-item='studio'>Студия</button>
          <button type="button" className="chart__btn" data-item='1'>1</button>
          <button type="button" className="chart__btn chart__btn--active" data-item='2'>2</button>
          <button type="button" className="chart__btn" data-item='3'>3</button>
          <button type="button" className="chart__btn" data-item='4'>4</button>
          <button type="button" className="chart__btn" data-item='5'>5+</button>
        </div>
        <canvas id="myChart"></canvas>
      </div>

      <div className="chart__description-box">
        <b className="chart__note">Проведена проверка экспертами</b>
        <div className="chart__description">
          Специалисты исследовали ЖК “Северные высоты”: сравнили обещания застройщика с реальностью, проверили договор
          ДДУ,
          собрали статистику по динамике цен, метражу и другим параметрам.
        </div>
        <button type="button" className="chart__description-btn light__btn">Смотреть отчет</button>
      </div>
    </div>
  </section>

    )
}

export default Chart;