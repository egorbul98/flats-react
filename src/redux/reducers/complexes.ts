import { ComplexeType } from "../../mainTypes";
import { SET_COMPLEXES, SetComplexesType } from "../actions/complexesActions";

const initialState = {
  items: null as Array<ComplexeType> | null
}
export type StateComplexesType = typeof initialState;
 
type ActionsTypes = SetComplexesType;

export const ComplexesReducer = (state = initialState, action:ActionsTypes):StateComplexesType => {
  switch (action.type) {
    case SET_COMPLEXES:
      return {...state, items: action.payload};
  
    default:
      return state;
  }
}
