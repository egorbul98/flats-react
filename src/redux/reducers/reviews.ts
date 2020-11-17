import { ReviewType } from "../../mainTypes";
import { ADD_REVIEW, SET_REVIEWS } from "../actions/reviewsActions";
import { AddReviewType, SetReviewsType } from "../actions/reviewsActions";

const initialState = {
  reviewsComplex: [] as Array<ReviewType>
}
export type StateReviewsType = typeof initialState;
 
type ActionsTypes = SetReviewsType | AddReviewType;


export const reviewsReducer = (state = initialState, action:ActionsTypes):StateReviewsType => {
  switch (action.type) {
    case SET_REVIEWS:
      return {...state, reviewsComplex: action.payload};
    case ADD_REVIEW:
      return { ...state, reviewsComplex: [...state.reviewsComplex, action.payload]};
  
    default:
      return state;
  }
}
