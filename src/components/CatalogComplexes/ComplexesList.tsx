import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComplexes } from '../../redux/actions/complexesActions';
import { AppStateType } from '../../redux/reducers/rootReducer';
import ComplexCart from './ComplexCart';
import Loading from '../miniComponents/Loading';
import classNames from 'classnames';
type PropsTypes = {
  displayItems: string
}

const ComplexesList : React.FC < PropsTypes > = ({displayItems = "Плиткой"}) => {

  const dispatch = useDispatch();
  const {complexesitems, isLoadingComplexes} = useSelector(({complexes}: AppStateType) => {
    return {
      complexesitems: complexes.items,
      isLoadingComplexes: complexes.isLoading
    }
  });

  
  React.useEffect(() => {
    dispatch(fetchComplexes());
  }, [dispatch]);

  return (
      
      <section className="catalog-complex-box catalog-complex">
      <div className="catalog-wrapper">
          <div className={ classNames("catalog-complex__list",{"catalog-complex__list--display-list":displayItems==="Списком"})}>
            {isLoadingComplexes
              ? <Loading/>
              : complexesitems && complexesitems.length ?
                complexesitems.map((item) => {
              return <ComplexCart key={item.id} {...item} />
            }) : <div className="nothing">Страница пуста</div>}
        </div>
  
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

export default React.memo(ComplexesList);