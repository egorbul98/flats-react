import React from 'react';
import classNames from 'classnames';

import { ReviewType } from '../../mainTypes';
import ReviewItem from './ReviewItem';
import Modal from '../Modal';
import ReviewAdd from './ReviewAdd';
import { AppStateType } from '../../redux/reducers/rootReducer';
import { useSelector } from 'react-redux';
type PropsTypes = {
  complexId:number
  // complexReviews?:Array<ReviewType>
}

const Reviews: React.FC<PropsTypes> = ({ complexId }) => {
  const { complexReviews } = useSelector(({reviews }:AppStateType) => {
    return {
      complexReviews: reviews.reviewsComplex
    }
  })

  const [activeReviewsType, setActiveReviewsType] = React.useState("complex");
  const [reviews, setReviews] = React.useState<Array<ReviewType> | undefined>([]);
  const [showAll, setShowAll] = React.useState(false);
  const [openModalReview, setOpenModalReview] = React.useState(false);

  const onOpenModal = () => {
    setOpenModalReview(true)
  }
  const onCloseModal = () => {
    setOpenModalReview(false)
  }

  const reviewsAboutComplex = React.useMemo(() => complexReviews?.filter((item) => item.about === "complex").sort((a, b)=>a.id>b.id ? -1 : 1), [complexReviews]);
  const reviewsAboutDev = React.useMemo(() => complexReviews?.filter((item) => item.about === "developer").sort((a, b)=>a.id>b.id ? -1 : 1), [complexReviews]);

  React.useEffect(() => {
    activeReviewsType === "complex"
      ? setReviews(reviewsAboutComplex)
      : setReviews(reviewsAboutDev)
   
  }, [activeReviewsType, reviewsAboutComplex, reviewsAboutDev]);

  const reviewsItems = showAll ? reviews : reviews?.slice(0, 3);

  const onToggleShow = () => {
    setShowAll(!showAll);
  }


  return (
    <>
      <section className="feedback" id="feedback">
        <div className="feedback__wrapper">
          <h2 className="feedback__title">Отзывы</h2>
          <div className="feedback__toggler">
            <a href="#"
              className={classNames("feedback__toogle-link feedback__toogle-link--estate", { "feedback__toogle-link--active": activeReviewsType === "complex" })} onClick={(e) => {
                e.preventDefault();
                setActiveReviewsType("complex");
                setShowAll(false);
              }}>О комплексе</a>
            <a href="#" className={classNames("feedback__toogle-link feedback__toogle-link--developer", { "feedback__toogle-link--active": activeReviewsType === "developer" })} onClick={(e) => {
              e.preventDefault();
              setActiveReviewsType("developer");
              setShowAll(false);
            }}>О застройщике</a>
          </div>
          <div className="feedback__wrap-inner">
            <div className="feedback__inner">
              {reviewsItems?.map((item, index) => <ReviewItem key={index + "_review_"+activeReviewsType} name={item.name} date={item.date} text={item.text} />)}
                
          </div>
        </div>
          <button type="button" className="feedback__add-btn light__btn" onClick={onOpenModal}>Добавить отзыв</button>
          {reviews && reviews.length > 3 && <button type="button" className={classNames("feedback__show-btn show__btn", {"feedback__show-btn--active": showAll}) } onClick={onToggleShow}><span className="text">{showAll ? "Скрыть отзывы" : "Показать все отзывы"}</span></button>}
          <button type="button" className="feedback__modalBtn hidden"><span className="visually-hidden">закрыть</span></button>
        </div>
  
        
      </section>
  
      <Modal onClose={onCloseModal} open={openModalReview} title="Добавить отзыв" className={"modal-feedback feedback__modal"}>
        <ReviewAdd complexId={complexId} about={activeReviewsType} onCloseModal={onCloseModal}/>
      </Modal>
    </>
    )
}

export default React.memo(Reviews);

   