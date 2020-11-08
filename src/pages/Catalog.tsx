import React from 'react';
import AdviceBox from '../components/AdviceBox';
import CatalogComplexes from '../components/CatalogComplexes/CatalogComplexes';
import Chart from '../components/Chart';
import CreditCalculator from '../components/CreditCalculator';
import FilterBox from '../components/FilterBox/FilterBox';
import Footer from '../components/Footer';

type PropsTypes = {

}

const Catalog:React.FC<PropsTypes> = ({}) => {
  

  return (
    <div className="body-catalog">
    
      <FilterBox/>
      
      <CatalogComplexes />
      

      {/* <Chart/>
      <CreditCalculator/> */}
      <AdviceBox/>
  
      <Footer />
      

  </div>
  )
}

export default Catalog;