import Axios from "axios";
import { ComplexeType } from "../../mainTypes";
import { FilterItemType } from "./filterActions";

export const SET_COMPLEXES = "SET_COMPLEXES";
export const SET_LOADING = "SET_LOADING";

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

export type SetLoadingType = {
  type: typeof SET_LOADING,
  payload: boolean
}

export const setLoading = (isLoading: boolean): SetLoadingType => {
  return {
    type: SET_LOADING, 
    payload: isLoading
  }
}

export const fetchComplexes = (filterItems: Array<FilterItemType> | null = null) => (dispatch: any): void => {
  dispatch(setLoading(true));
  let args = "&";
  
  if (filterItems) {
    filterItems.forEach((item) => {
      if (item.values.length) {
        item.values.forEach((valItem) => {
          args += `${item.type}=${valItem.value}&`;
        })
      }
    })
    
  }

  Axios.get("http://localhost:3004/complexes?_embed=flats"+args)
    .then(({ data }) => {
      console.log(data);
      
      dispatch(setComplexes(data));
      dispatch(setLoading(false));
    })
    .catch((e)=>console.log(e))
}