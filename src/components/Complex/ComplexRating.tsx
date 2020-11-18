import React from 'react';
import { ComplexeRatingType } from '../../mainTypes';

import {ReactComponent as SvgIconChild} from '../../assets/img/icon-balancer.svg';
import {ReactComponent as SvgIconInfrastructure} from '../../assets/img/icon-infrastructure.svg';
import {ReactComponent as SvgIconArea} from '../../assets/img/icon-compass.svg';
import {ReactComponent as SvgIconSafe} from '../../assets/img/icon-lock.svg';
import {ReactComponent as SvgIconTransport} from '../../assets/img/icon-bus.svg';
import {ReactComponent as SvgIconHouse} from '../../assets/img/icon-hotel.svg';


type RatingItemPropsTypes = {
  title: string,
  rating: number,
  icon?: React.ReactChild | React.ReactChildren ,
  className?: string,
  dataAosDelay?: string | number
}

const RatingItem:React.FC<RatingItemPropsTypes> = ({title, rating, icon, className, dataAosDelay}) => {
  return (
    <li className="rating__list-item" data-aos="zoom-in" data-aos-delay={dataAosDelay}>
      <div className={"rating__list-figure rating__list-figure--kids "+ className}>
        {icon}
        <span className="rating__value rating__value--kids">{rating}</span>
        <div className="rating__list-border" data-aos="border-pink"></div>
      </div>
      {title}
    </li>
  )
}

type PropsTypes = {
  complexName: string,
  rating?: ComplexeRatingType & {[key:string]:number}
}


const ComplexRating : React.FC < PropsTypes > = ({complexName, rating}) => {

  const averageRating = React.useMemo(() => {
    let sum = 0;
    let count = 0;
    for (const i in rating) {
      if (rating.hasOwnProperty(i)) {
        sum += rating[i];
        count++;
      }
    }
    return (sum/count).toFixed(1);
  }, [rating])

  return (
    <section className="rating">
      <div className="rating__wrapper">
        <h2 className="rating__title">Рейтинг {complexName}</h2>
        <small className="rating__text">Рейтинг составлен на основании отзывов с форумов дольщиков.</small>
        <ul className="rating__list">
        
          {rating && 
            <>
            <RatingItem title={"Для детей"} rating={rating.child} icon={<SvgIconChild />} className={"rating__list-figure--kids"} />
              <RatingItem title={"Инфраструктура"} rating={rating.infr} icon={ <SvgIconInfrastructure/>} className={"rating__list-figure--infrastructure"} dataAosDelay={200}/>
              <RatingItem title={"Район"} rating={rating.area} icon={ <SvgIconArea/> } className={"rating__list-figure--district"} dataAosDelay={300}/>
              <RatingItem title={"Безопасность"} rating={rating.safe} icon={ <SvgIconSafe/> } className={"rating__list-figure--safety"} dataAosDelay={400}/>
              <RatingItem title={"Транспорт"} rating={rating.transport} icon={ <SvgIconTransport/> } className={"rating__list-figure--transport"} dataAosDelay={500}/>
              <RatingItem title={"Квартира/дом"} rating={rating.house} icon={ <SvgIconHouse/> } className={"rating__list-figure--house"} dataAosDelay={600}/>
            </>
          }
          
        </ul>
        <div className="rating__average-container">
          <span className="rating__average-line rating__average-line--left"></span>
          <div className="rating__average-box">
            <b className="rating__average-rating">Средняя оценка</b>
            <b className="rating__average-building">{ complexName }</b>
          </div>
          <span className="rating__average-value">{averageRating}</span>
          <span className="rating__average-line rating__average-line--right"></span>
        </div>
      </div>
    </section>
    
    )
}

export default React.memo(ComplexRating);

   