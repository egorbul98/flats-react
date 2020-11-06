import { SET_FLATS, SetFlatsType } from "../actions/flatsActions";

const initialState = {
 
}
export type StateFlatsType = typeof initialState;
 
type ActionsTypes = SetFlatsType;


export const flatsReducer = (state = initialState, action:ActionsTypes):StateFlatsType => {
  switch (action.type) {
    case SET_FLATS:
      
      return state;
  
    default:
      return state;
  }
}
