import React from 'react';

type PropsTypes = {
  
}

const ComplexDocuments : React.FC < PropsTypes > = ({}) => {

  return (
    <section className="documents" id="documents">
      <div className="documents__wrapper">
        <h2 className="documents__title">Документы</h2>
        <ul className="documents__list">
          <li className="documents__item fancybox" data-fancybox-type="iframe">
            <p className="documents__item-name">Договор ДДУ</p>
            <span className="documents__item-size">125 кб</span>
          </li>
          <li className="documents__item fancybox" data-fancybox-type="iframe">
            <p className="documents__item-name">Договор ДДУ</p>
            <span className="documents__item-size">125 кб</span>
          </li>
          <li className="documents__item fancybox" data-fancybox-type="iframe">
            <p className="documents__item-name">Договор ДДУ</p>
            <span className="documents__item-size">125 кб</span>
          </li> 
        </ul>
        <button type="button" className="documents__show-btn show__btn">Показать еще 5 документов</button>
        <button type="button" id="consultationBtn" className="documents__btn light__btn">Получить консультацию
          юриста</button>
      </div>
    </section>
     
    
    )
}

export default React.memo(ComplexDocuments);

   