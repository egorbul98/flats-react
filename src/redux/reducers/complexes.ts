import { ComplexeType } from "../../mainTypes";
import { SET_COMPLEXES, SET_TOTAL_COUNT, SET_CURRENT_PAGE, SET_LOADING, SetComplexesType, SetTotalCountType, SetCurrentPageType, SetLoadingType } from "../actions/complexesActions";

const initialState = {
  items: null as Array<ComplexeType> | null,
  currentPage: 1 as number,
  perPage: 4 as number,
  totalCount: 0 as number,
  isLoading: false as boolean
}
export type StateComplexesType = typeof initialState;
 
type ActionsTypes = SetComplexesType | SetTotalCountType | SetCurrentPageType | SetLoadingType;

export const ComplexesReducer = (state = initialState, action:ActionsTypes):StateComplexesType => {
  switch (action.type) {
    case SET_COMPLEXES:
      return { ...state, items: action.payload};
    
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    
    case SET_LOADING:
      return {...state, isLoading: action.payload};
  
    default:
      return state;
  }
}
