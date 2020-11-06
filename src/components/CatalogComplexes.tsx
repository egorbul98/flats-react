import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComplexes } from '../redux/actions/complexesActions';
import { AppStateType } from '../redux/reducers/rootReducer';
import ComplexCart from './ComplexCart';

type PropsTypes = {}

const CatalogComplexes : React.FC < PropsTypes > = () => {

  const dispatch = useDispatch();
  const {complexesitems} = useSelector(({complexes}: AppStateType) => {
    return {
      complexesitems: complexes.items
    }
  });
  
  React.useEffect(() => {
    dispatch(fetchComplexes());
  }, [dispatch]);

    return (
      <section className="catalog-complex-box catalog-complex">
      <div className="catalog-wrapper">
        <div className="catalog-complex__list">
            {complexesitems && complexesitems.map((item) => {
              
              
              return <ComplexCart key={item.id} {...item}/>
            })}
        </div>
        <div className="pink__btn catalog-complex__show-more">Показать еще <span className="count-flats">25 объектов</span><img
            src="img/arrow__down-input-grey.svg" alt="img"/></div>
  
        <div className="pagination">
          <div className="pagination__prev">«</div>
          <div className="pagination__item pagination__item--active first-page">1</div>
          <div className="pagination__item">2</div>
          <div className="pagination__item">3</div>
          <div className="pagination__item">4</div>
          <div className="pagination__item">5</div>
          <div className="pagination__item">6</div>
          <div className="pagination__item">7</div>
          <div className="pagination__item">8</div>
          <div className="pagination__item">9</div>
          <div className="pagination__item">10</div>
          <div className="pagination__next">»</div>
        </div>
      </div>
    </section>
  
    )
}

export default CatalogComplexes;