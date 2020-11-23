import Axios from "axios";
import { urlDataServ } from "../../assets/data";
import { ReviewType } from "../../mainTypes";

export const ADD_REVIEW = "ADD_REVIEW";
export const SET_REVIEWS = "SET_REVIEWS";

export type SetReviewsType = {
  type: typeof SET_REVIEWS,
  payload: Array<ReviewType>
}

export const setReviews = (reviews:Array<ReviewType>): SetReviewsType => {
  return {
    type: SET_REVIEWS, 
    payload: reviews
  }
}

export type AddReviewType = {
  type: typeof ADD_REVIEW,
  payload: ReviewType
}

export const addReview = (review:ReviewType): AddReviewType => {
  return {
    type: ADD_REVIEW, 
    payload: review
  }
}

export const addComplexReview = (review:{complexId:number, date:string, name:string, text:string, about:string}) => (dispatch: any): void => {
  
  Axios.post(`${urlDataServ}/reviews/`, review).then(({data}) => {
    dispatch(addReview(data));
  })
  
}