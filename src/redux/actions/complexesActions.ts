import Axios from "axios";
import { ComplexeType } from "../../mainTypes";
import { StateFilterType } from "../reducers/filter";

export const SET_COMPLEXES = "SET_COMPLEXES";

export type SetComplexesType = {
  type: typeof SET_COMPLEXES,
  payload: Array<ComplexeType>
}

export const setComplexes = (complexes: Array<ComplexeType>): SetComplexesType => {
  return {
    type: SET_COMPLEXES, 
    payload: complexes
  }
}

export const fetchComplexes = (filter: StateFilterType | null = null) => (dispatch: any): void => {
  
  Axios.get("http://localhost:3004/complexes?_embed=flats")
    .then(({ data }) => {
      
      dispatch(setComplexes(data))
    })
    .catch((e)=>console.log(e))
}