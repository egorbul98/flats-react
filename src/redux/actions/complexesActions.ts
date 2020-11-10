import Axios from "axios";
import { getFlatsGroupByRooms, getMinMaxValuesFlats } from "../../handlers/complexesHandlers";
import { ComplexeType, ItemSelectType } from "../../mainTypes";
import { AppStateType } from "../reducers/rootReducer";
import { FilterItemDiapasonType, FilterItemType } from "./filterActions";

export const SET_COMPLEXES = "SET_COMPLEXES";
export const SET_LOADING = "SET_LOADING";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE,
  payload: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
  return {
    type: SET_CURRENT_PAGE, 
    payload: currentPage
  }
}
export type SetTotalCountType = {
  type: typeof SET_TOTAL_COUNT,
  payload: number
}

export const setTotalCount = (totalCount: number): SetTotalCountType => {
  return {
    type: SET_TOTAL_COUNT, 
    payload: totalCount
  }
}

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

export const fetchComplexes = (region: string = "SP", filterItems: Array<FilterItemType> | null = null, filterItemsDiapason: Array<FilterItemDiapasonType> | null = null, sortBy: string | null = null, currentPage: number = 1, perPage: number = 4) => (dispatch: any, getState: ()=>AppStateType): void => {
  
  
  // filterItems - фильтры select'ов
  // filterItemsDiapason - фильтры полей "от" и "до" типа "Стоимость" или "Площадь" 
  dispatch(setLoading(true));
  dispatch(setCurrentPage(currentPage));

  const {filterItems, filterItemsDiapason, region, sortBy} = getState().filter;

  // if (filterItems && filterItems.length == 0) {
  //   filterItems = getState().filter.filterItems;
  // }
  
  let args = `&region=${region}&`;
  // переменные, определяющие участвуют ли в фильтрации конкретные параметры. Если такие параметры участвуют, то будет происходить доп. фильтрация
  let deadlinesValues:Array<string | number> | null = null;
  let roomsValues: Array<string | number> | null = null;
  
  console.log(filterItems, "filterItems", getState().filter.filterItems);
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
  
  args += "_sort=" + sortBy + "&";

  // args += `_page=${currentPage}&_limit=${perPage}`;
  
  
  Axios.get("http://localhost:3004/complexes?_embed=flats"+args)
    .then(({ data, headers }) => {
     
      const complexes = data.filter((complex: ComplexeType) => {
        const [minCostSquare, maxCostSquare, minCost, maxCost] = getMinMaxValuesFlats(complex.flats);
        complex.maxCost = maxCost;
        complex.minCost = minCost;
        complex.maxCostSquare = maxCostSquare;
        complex.minCostSquare = minCostSquare;
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

            if (!inArray) {
              break;
            }
          }
        }
        
        if (!inArray) {
          return false;
        } 

        //сортируем срок сдачи по годам
        complex.deadline.sort((a, b) => a.year > b.year ? 1 : -1);
        complex.maxDeadline = complex.deadline[complex.deadline.length - 1].year;
        return true;
      })
      
      if (sortBy === "cost" || sortBy === "costSquare" || sortBy === "deadline") {
        let sortPropName = "";
        if (sortBy === "cost") {
          sortPropName = "minCost";
        }else if (sortBy === "costSquare") {
          sortPropName = "minCostSquare";
        }else {
          sortPropName = "maxDeadline";
        }
       
        complexes.sort((a: any, b: any) => {
          if (a[sortPropName] && b[sortPropName]) {
            if (sortBy === "deadline") {
              return a[sortPropName] < b[sortPropName] ? 1 : -1;
            }
            return a[sortPropName] > b[sortPropName] ? 1 : -1;
          } else {
            return -1;
          }
        })
      } 
      
    
      dispatch(setTotalCount(headers["x-total-count"] ? +headers["x-total-count"] : complexes.length));
      dispatch(setComplexes(complexes));
      dispatch(setLoading(false));
    })
    .catch((e)=>console.error(e))
}

function checkInArray(arrayIncludes:Array<string | number>, arr:any, nameProp:string) {//Проверяет есть ли в массиве arrayIncludes какие-либо элементы из массива arr. Проверка по свойству nameProp элементов массива arr
 
  let inArray = arr.some((item:any) => {
      return arrayIncludes?.includes(item[nameProp]);
  });

  return inArray;
}