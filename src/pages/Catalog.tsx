import React, { useCallback } from 'react';
import AdviceBoxSlider from '../components/AdviceBoxSlider';
import CatalogComplexes from '../components/CatalogComplexes/CatalogComplexes';
import Chart from '../components/Chart';
import CreditCalculator from '../components/CreditCalculator';
import FilterBox from '../components/FilterBox/FilterBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MapModal from '../components/MapComplexes/MapModal';

type PropsTypes = {

}

const Catalog: React.FC<PropsTypes> = ({ }) => {
  const [openMap, setOpenMap] = React.useState(false);

  const onOpenMap = useCallback(() => {
    setOpenMap(true);
    document.body.classList.add("body--fixed");
  }, [setOpenMap])

  const onCloseMap = useCallback(() => {
    document.body.classList.remove("body--fixed");
    setOpenMap(false);
  }, [setOpenMap])
  
  return (
    <>
      <Header />
      <div className="body-catalog">
        <FilterBox onOpenMap={onOpenMap}/>
        <MapModal open={openMap} onCloseMap={ onCloseMap }/>
        <CatalogComplexes onOpenMap={ onOpenMap }/>
        
  
        {/* <Chart/>
        <CreditCalculator/> */}
        <div className="catalog-wrapper">
          <h3 className="advice-box__title">Смотрите полезные советы</h3>
        </div>
        <AdviceBoxSlider>
            <SlideItem src={ "https://www.youtube.com/embed/LXb3EKWsInQ" } title="Перепланировка. С чего начать? Подводные камни"/>
            <SlideItem src={ "https://www.youtube.com/watch?v=l6pDOwNeTrg" } title="Полезное видео"/>
            <SlideItem src={ "https://www.youtube.com/watch?v=5Gwb1SBFX-M" } title="Перепланировка. С чего начать? Подводные камни"/>
            <SlideItem src={ "https://www.youtube.com/embed/LXb3EKWsInQ" } title="Перепланировка. С чего начать? Подводные камни"/>
        </AdviceBoxSlider>
    
        <Footer onOpenMap={onOpenMap }/>
        
  
      </div>
    </>
  )
}
type PropsTypeSlide = {
  src: string
  title: string
}
const SlideItem: React.FC<PropsTypeSlide> = React.memo(({src, title}) => {
  return (
    <div className="advice-slider__item" >
      <div className="advice-slider__item-video">
        <iframe style={{ width: "100%", height: "216px" }} src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <div className="advice-slider__item-desc">{title}</div>
    </div>
  )
})

export default Catalog;