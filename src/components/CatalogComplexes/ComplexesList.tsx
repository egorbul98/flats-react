import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComplexes, setCurrentPage } from '../../redux/actions/complexesActions';
import { AppStateType } from '../../redux/reducers/rootReducer';
import ComplexCart from './ComplexCart';
import Loading from '../miniComponents/Loading';
import classNames from 'classnames';
import Pagination from '../miniComponents/Pagination';
import { setClearFilter } from '../../redux/actions/filterActions';
type PropsTypes = {
  displayItems: string
}

const ComplexesList : React.FC < PropsTypes > = ({displayItems = "Плиткой"}) => {

  const dispatch = useDispatch();
  const {complexes, region, isLoadingComplexes, countComplexes, currentPage, perPage, error} = useSelector(({complexes, filter}: AppStateType) => {
    return {
      complexes: complexes.items,
      error: complexes.errorText,
      region: filter.region,
      countComplexes: complexes.totalCount,
      perPage: complexes.perPage,
      currentPage: complexes.currentPage,
      isLoadingComplexes: complexes.isLoading
    }
  });

  const countPages = React.useMemo(() =>  Math.ceil(countComplexes / perPage), [countComplexes, perPage]); //Считаем количество страниц
  
  React.useEffect(() => {
    dispatch(setClearFilter());
    dispatch(fetchComplexes(region));
  }, [dispatch, region]);

  const lastIndexItemPage = perPage * currentPage;
  const firstIndexItemPage = lastIndexItemPage - perPage;
  const complexesItems = complexes.slice(firstIndexItemPage, lastIndexItemPage);
  
  const onClickPaginateItem = useCallback((currentPage:number) => {
    dispatch(setCurrentPage(currentPage));
  }, [dispatch])

  
  return (
      
      <section id="catalog-complex-box" className="catalog-complex-box catalog-complex">
      <div className="catalog-wrapper">
        <div className={classNames("catalog-complex__list", { "catalog-complex__list--display-list": displayItems === "Списком" })}>
          {error && <div className="nothing">{error}</div>}
            {isLoadingComplexes
              ? <Loading/>
              : complexesItems.length ?
                complexesItems.map((item) => {
                  return <ComplexCart key={item.id} {...item} display={displayItems}/>
            }) : <div className="nothing">Страница пуста</div>}
        </div>
  
        {countPages > 1 &&
          <Pagination
          countPage={countPages}
          currentPage={currentPage}
          onClickItem={onClickPaginateItem}
        />}
        
      </div>
    </section>
    )
}

export default React.memo(ComplexesList);