import React from 'react';
import AdviceBox from '../components/AdviceBox';
import CatalogComplexes from '../components/CatalogComplexes/CatalogComplexes';
import Chart from '../components/Chart';
import CreditCalculator from '../components/CreditCalculator';
import FilterBox from '../components/FilterBox/FilterBox';
import Footer from '../components/Footer';
import MapModal from '../components/MapModal';

type PropsTypes = {

}

const Catalog: React.FC<PropsTypes> = ({ }) => {
  const [openMap, setOpenMap] = React.useState(false);

  const onOpenMap = () => {
    setOpenMap(true);
    document.body.classList.add("body--fixed");
  }
  const onCloseMap = () => {
    document.body.classList.remove("body--fixed");
    setOpenMap(false);
  }


  return (
    <div className="body-catalog">
    
      <FilterBox onOpenMap={onOpenMap}/>
      <MapModal open={openMap} onCloseMap={ onCloseMap }/>
      <CatalogComplexes />
      

      {/* <Chart/>
      <CreditCalculator/> */}
      <AdviceBox/>
  
      <Footer />
      

  </div>
  )
}

export default Catalog;