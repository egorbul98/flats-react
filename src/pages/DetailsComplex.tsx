import React, { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

import ComplexAuthorDescription from '../components/Complex/ComplexAuthorDescription';
import ComplexCharacteristics from '../components/Complex/ComplexCharacteristics';
import DocumentsBlock from '../components/DocumentsBlock/DocumentsBlock';
import ComplexRating from '../components/Complex/ComplexRating';
import ComplexFlatsInfo from '../components/Complex/ComplexFlatsInfo/ComplexFlatsInfo';
import CreditCalculator from '../components/CreditCalculator/CreditCalculator';
import Footer from '../components/Footer';
import HeaderDeatailPage from '../components/HeaderDeatailPage';
import VideoSlider from '../components/VideoSlider';
import ComplexMap from '../components/Complex/ComplexMap';
import Reviews from '../components/Reviews/Reviews';


import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailComplex } from '../redux/actions/complexesActions';
import { AppStateType } from '../redux/reducers/rootReducer';
import ComplexSliderDetail from '../components/Complex/ComplexSliderDetail';
import Modal from '../components/Modal';
import AdviceBoxSlider from '../components/AdviceBoxSlider';
import { ComplexLikeType } from '../mainTypes';

type PropsTypes = {

}
const onScrollTop = () => {
  window.scrollTo(0, 0);
}
const DetailsComplex: React.FC<PropsTypes> = ({ }) => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchDetailComplex(id));
  }, [id, dispatch]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      once: true,
      duration: 700,
      offset: 60
    })
  }, []);

  
  const { complex } = useSelector(({complexes}:AppStateType) => {
    return {
      complex: complexes.detailComplex
    }
  })
  
  if (!complex) {
    return null
  }

  return (
    
    <div className="detail-page">
      
        <HeaderDeatailPage />
        <ComplexSliderDetail {...complex}/>
        
      {complex.flatsGroupByRooms && complex.flats && <ComplexFlatsInfo groupedFlats={complex.flatsGroupByRooms} flats={ complex.flats }/> }
      
        {/* <VideoSlider /> */}
        
        <div className="container-details sign-up-btn"><button type="button" id='btnOpenExcursionModal' className="expectation__btn pink__btn center-block">Записаться на экскурсию</button></div>
    
        {/* <ComplexCharacteristics />  */}
      <ComplexRating complexName={complex.name} rating={ complex.complexDetail?.rating}/>
       
      <ComplexAuthorDescription descriptionObj={ complex.complexDetail?.authorDesc}/>
      
      {complex.complexDetail?.documents && <DocumentsBlock documents={complex.complexDetail.documents} />}
      
        <CreditCalculator />
        
      <section className="route">
          <div className="route__wrapper">
          <h2 className="route__title">Карта проезда к { complex.name }</h2>
          </div>
          <div className="route__map" id="map">
                <ComplexMap coords={complex.coords}/>
          </div>
      </section>
        
      

      <Reviews complexId={complex.id}  />
        
      <div className="analog__wrapper"><h2 className="analog__title">Подобные ЖК</h2></div>
      <AdviceBoxSlider className="analog">
          {complex.complexDetail && complex.complexDetail?.complexLike.map((item, index) => {
            return <SlideItem key={ index + "_analog"} item={ item } />
          })}
      </AdviceBoxSlider>
      <div className="container-details"><Link to="/" className="analog__btn light__btn center-block" onClick={onScrollTop}>Смотреть все предложения</Link></div>
      
 
  <Footer />
  </div>
   
  )
}

type PropsTypeSlide = {
  item: ComplexLikeType
}

const SlideItem: React.FC<PropsTypeSlide> = React.memo(({ item }) => {
  
  return (
    <Link to={`/complex/${item.id}`} onClick={onScrollTop}>
      <div className="analog__item">
        <div className="analog__item-image-wrap">
          <img className="analog__item-image" src={item.imgSrc} alt="подобный ЖК" width="110" height="80" />
          <h3 className="analog__item-title">{ item.name }</h3>
        </div>
        <div className="analog__item-box">
          <address className="analog__item-address">
            <p className="analog__item-metro">{item.metro}, {item.metroDistance} мин. пешком</p>
            <p className="analog__item-street">{item.address}</p>
          </address>
        </div>
      </div>
    </Link>
  )
})

export default DetailsComplex;