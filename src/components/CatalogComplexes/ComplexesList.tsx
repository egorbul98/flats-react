import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComplexes, setCurrentPage } from '../../redux/actions/complexesActions';
import { AppStateType } from '../../redux/reducers/rootReducer';
import ComplexCart from './ComplexCart';
import Loading from '../miniComponents/Loading';
import classNames from 'classnames';
import Pagination from '../miniComponents/Pagination';
type PropsTypes = {
  displayItems: string
}

const ComplexesList : React.FC < PropsTypes > = ({displayItems = "Плиткой"}) => {

  const dispatch = useDispatch();
  const {complexesItems, isLoadingComplexes, filterItems, filterItemsDiapason, sortBy, countComplexes, currentPage, perPage} = useSelector(({complexes, filter}: AppStateType) => {
    return {
      complexesItems: complexes.items,
      countComplexes: complexes.totalCount,
      perPage: complexes.perPage,
      currentPage: complexes.currentPage,
      isLoadingComplexes: complexes.isLoading,
      filterItems: filter.filterItems,
      filterItemsDiapason: filter.filterItemsDiapason,
      sortBy: filter.sortBy
    }
  });

  const countPages = React.useMemo(() =>  Math.ceil(countComplexes / perPage), [countComplexes, perPage]); //Считаем количество страниц
  
  React.useEffect(() => {
    dispatch(fetchComplexes());
  }, [dispatch]);

  const onClickPaginateItem = useCallback((currentPage:number) => {
    dispatch(fetchComplexes(filterItems, filterItemsDiapason, sortBy, currentPage, perPage));
  }, [dispatch, filterItems, filterItemsDiapason, sortBy, perPage])

 
  return (
      
      <section className="catalog-complex-box catalog-complex">
      <div className="catalog-wrapper">
          <div className={ classNames("catalog-complex__list",{"catalog-complex__list--display-list":displayItems==="Списком"})}>
            {isLoadingComplexes
              ? <Loading/>
              : complexesItems && complexesItems.length ?
                complexesItems.map((item) => {
              return <ComplexCart key={item.id} {...item} />
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