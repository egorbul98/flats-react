import React from 'react';
import AdviceBox from '../components/AdviceBox';
import CatalogComplexes from '../components/CatalogComplexes';
import Chart from '../components/Chart';
import CreditCalculator from '../components/CreditCalculator';
import FilterBox from '../components/FilterBox/FilterBox';
import Footer from '../components/Footer';
import SortBox from '../components/SortBox';

type PropsTypes = {

}

const Catalog:React.FC<PropsTypes> = ({}) => {
  
  return (
    <div className="body-catalog">
    
      <FilterBox/>
      <SortBox/>
      <CatalogComplexes />
      
      <div className="expectation">
    <button type="button" id='btnOpenExcursionModal' className="expectation__btn pink__btn">Записаться на
      экскурсию</button>
  </div>

      <Chart/>
      <CreditCalculator/>
      <AdviceBox/>
  
      <Footer />
      

  </div>
  )
}

export default Catalog;