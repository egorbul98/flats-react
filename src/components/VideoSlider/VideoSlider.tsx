import React, { useState } from 'react';
import Slider, {Settings} from 'react-slick';
import { ComplexeVideoType } from '../../mainTypes';
import VideoItem from './VideoItem';

type PropsTypes = {
  items:Array<ComplexeVideoType>
}
const VideoSlider: React.FC<PropsTypes> = ({items }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settingsSlider:Settings = { //настройки слайдера
    centerMode: true,
    centerPadding: '15%',
    slidesToShow: 1,
    arrows: false,
    dots: false,
    adaptiveHeight:true,
    responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: '12%',
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false
        }
      }
    ],
    
    beforeChange: (currentSlide:number, nextSlide: number) => {
      setActiveSlide(nextSlide);
    },
    
  }
  const onClickPlay = () => {
    
  }
  const onClickPause = () => {
    
  }
  
  return (
    <section className="review" id="videoReview">
      <div className="review__wrapper">
        <h2 className="review__title">Видеообзоры</h2>
      </div>
      
      <div className="wrapper">
        <Slider {...settingsSlider} className="video-slider" >
          {items.map((item, i) => <VideoItem
            key={i + "_videoSlide"}
            srcImage={item.imgSrc}
            srcVideo={item.videoSrc}
            active={activeSlide === i}
          />)}
        </Slider>
        
      </div>
    </section>
    
    )
}

export default React.memo(VideoSlider);

   