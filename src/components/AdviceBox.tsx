import React from 'react';

type PropsTypes = {}

const AdviceBox : React.FC < PropsTypes > = () => {

    return (
      <section className="advice-box">
    <div className="catalog-wrapper">
      <h3 className="advice-box__title">Смотрите полезные советы</h3>
      <div className="advice-slider">
        {/* <!-- слайды добавляются в файле slickSliders.js --> */}
      </div>
    </div>
  </section>

    )
}

export default AdviceBox;