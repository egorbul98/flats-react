import React from 'react';

import iconAvatar from '../../assets/img/icons/avatar.svg';
import iconArrow from '../../assets/img/arrow__down-input-grey.svg';
import { ReviewType } from '../../mainTypes';

type PropsTypes = {name:string, date:string, text:string}

const limit = 140;//лимит 140 символов
const Reviews : React.FC < PropsTypes > = ({name, date, text}) => {
  const [readMore, setReadMore] = React.useState(text.length > 140 ? false: true);

  React.useEffect(() => {
    setReadMore(text.length > 140 ? false : true);
  }, [text]);
  const onReadMore = (e:any) => {
    setReadMore(true);
  }

  return (
    <div className="feedback__box">
      <div className="feedback__avatar-box"> <img src={iconAvatar} alt="аватарка" className="feedback__avatar" width="16" height="20" /></div>
      
      <div className="feedback-content">
        <div className="feedback__author-container"><b className="feedback__author">{name}</b><small className="feedback__time">{date}</small></div>
        
        <p className="feedback__text">{readMore ? text : text.slice(0, limit) + "..." }</p>
        <div className="feedback__buttons">
          {!readMore && <button type="button" className="feedback__btn feedback__btn--unfurl " onClick={onReadMore}>
            <span className="text">Читать весь отзыв</span> 
            <img src={iconArrow} alt="iconArrow" /></button>}
        </div>
      </div>

  </div>
    )
}

export default React.memo(Reviews);

   