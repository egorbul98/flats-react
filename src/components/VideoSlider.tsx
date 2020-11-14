import React from 'react';

type PropsTypes = {
  
}

const VideoSlider : React.FC < PropsTypes > = ({}) => {

  return (
    <section className="review" id="videoReview">
      <div className="review__wrapper">
        <h2 className="review__title">Видеообзоры</h2>
      </div>
      <div className="wrapper">
        <div className="video-slider">
          <div className="video-slider__item slide">
            <div className="wrapper-player">
              <div id="player0" className="content slide__video"></div>
            </div>
            <button className="btn-pause"><img src="img/btn-pause.svg" alt="play"/></button>
            <div className="content slide__img">
              <img src="img/img-video-1.jpg"/>
              <button className="btn-play" type="button"><img src="img/btn-play.svg" alt="play"/></button>
            </div>
          </div>

          <div className="video-slider__item slide">
            <div className="wrapper-player">
              <div id="player1" className="content slide__video"></div>
            </div>
            <button className="btn-pause"><img src="img/btn-pause.svg" alt="play"/></button>
            <div className="content slide__img">
              <img src="img/img-video-2.jpg"/>
              <button className="btn-play" type="button"><img src="img/btn-play.svg" alt="play"/></button>
            </div>
          </div>

          <div className="video-slider__item slide">
            <div className="wrapper-player">
              <div id="player2" className="content slide__video"></div>
            </div>
            <button className="btn-pause"><img src="img/btn-pause.svg" alt="play"/></button>
            <div className="content slide__img">
              <img src="img/img-video-3.jpg"/>
              <button className="btn-play" type="button"><img src="img/btn-play.svg" alt="play"/></button>
            </div>
          </div>

          <div className="video-slider__item slide">
            <div className="wrapper-player">
              <div id="player3" className="content slide__video"></div>
            </div>
            <button className="btn-pause"><img src="img/btn-pause.svg" alt="play"/></button>
            <div className="content slide__img">
              <img src="img/img-video-4.jpg"/>
              <button className="btn-play btn-start" type="button"><img src="img/btn-play.svg" alt="play"/></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    )
}

export default React.memo(VideoSlider);

   