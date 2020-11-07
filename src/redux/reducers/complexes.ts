import { ComplexeType } from "../../mainTypes";
import { SET_COMPLEXES, SET_LOADING, SetComplexesType, SetLoadingType } from "../actions/complexesActions";

const initialState = {
  items: null as Array<ComplexeType> | null,
  isLoading: false as boolean
}
export type StateComplexesType = typeof initialState;
 
type ActionsTypes = SetComplexesType | SetLoadingType;

export const ComplexesReducer = (state = initialState, action:ActionsTypes):StateComplexesType => {
  switch (action.type) {
    case SET_COMPLEXES:
      return { ...state, items: action.payload};
    
    case SET_LOADING:
      return {...state, isLoading: action.payload};
  
    default:
      return state;
  }
}
