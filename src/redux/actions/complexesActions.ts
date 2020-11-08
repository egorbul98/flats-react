import Axios from "axios";
import { getFlatsGroupByRooms, getMinMaxValuesFlats } from "../../handlers/complexesHandlers";
import { ComplexeType, ItemSelectType } from "../../mainTypes";
import { FilterItemDiapasonType, FilterItemType } from "./filterActions";

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

export const fetchComplexes = (filterItems: Array<FilterItemType> | null = null, filterItemsDiapason: Array<FilterItemDiapasonType> | null = null) => (dispatch: any): void => {
  dispatch(setLoading(true));
  let args = "&";
  // переменные, определяющие участвуют ли в фильтрации конкретные параметры. Если такие параметры участвуют, то будет происходить доп. фильтрация
  let deadlinesValues:Array<string | number> | null = null;
  let roomsValues:Array<string | number> | null = null;
  let isCost = null;
  let isSquare = null;

  if (filterItems) {
    filterItems.forEach((item) => {
      if (item.values.length) {
        item.values.forEach((valItem) => {
          if (item.type === "deadline") {
            deadlinesValues = item.values.map((item) => {
              return +item.value;
            });
          }else if (item.type === "rooms") {
            roomsValues = item.values.map((item) => {
              return item.value;
            });
          } else {
            args += `${item.type}=${valItem.value}&`;
          }
        })
      }
    })
  }

  Axios.get("http://localhost:3004/complexes?_embed=flats"+args)
    .then(({ data }) => {
      
      const complexes = data.filter((complex: ComplexeType) => {
        const [minCostSquare, maxCostSquare, minCost, maxCost] = getMinMaxValuesFlats(complex.flats);
        complex.maxCost = maxCost;
        complex.minCost = minCost;
        let inArray:boolean | undefined = true;
        if (deadlinesValues) {
          inArray = checkInArray(deadlinesValues, complex.deadline, "year");
          if (!inArray) {
            return false;
          } 
        }

        if (roomsValues) {
          inArray = checkInArray(roomsValues, complex.flats, "room");
          if (!inArray) {
            return false;
          } 
        }
        
        if (filterItemsDiapason) {
          for (let i = 0; i < filterItemsDiapason.length; i++) {
            const filterItem = filterItemsDiapason[i];
            const nameProp: string = filterItem.type;
            if (filterItem.from == 0 && filterItem.to == 0) {
              continue;
            }
            inArray = complex.flats?.some((flat: any) => {
              if (filterItem.to == 0) {
                return (+flat[nameProp] >= +filterItem.from) ? true : false;
              } else {
                return (+flat[nameProp] >= +filterItem.from && +flat[nameProp] <= +filterItem.to) ? true : false;
              }
              
            });

            console.log(inArray, "inArray1");
            if (!inArray) {
              console.log(inArray, "inArray2");
              break;
            }
          }
        }
        
        // filterItemsDiapason?.forEach((filterItem) => {
        //   const nameProp:string = filterItem.type;
        //   inArray = complex.flats?.some((flat: any) => {
        //     console.log(nameProp, (flat[nameProp] >= filterItem.from && flat[nameProp] <= filterItem.to) ? 1 : -1, flat[nameProp]);
            
        //     return (flat[nameProp] >= filterItem.from && flat[nameProp] <= filterItem.to) ? 1 : -1;
        //   });
        // });
        if (!inArray) {
          return false;
        } 
        return true;
      })
      dispatch(setComplexes(complexes));
      dispatch(setLoading(false));
    })
    .catch((e)=>console.log(e))
}

function checkInArray(arrayIncludes:Array<string | number>, arr:any, nameProp:string) {//Проверяет есть ли в массиве arrayIncludes какие-либо элементы из массива arr. Проверка по свойству nameProp элементов массива arr
 
  let inArray = arr.some((item:any) => {
      return arrayIncludes?.includes(item[nameProp]);
  });

  return inArray;
}