import Axios from "axios";
import { getFlatsGroupByRooms, getMinMaxValuesFlats } from "../../handlers/complexesHandlers";
import { ComplexeType, ItemSelectType, ComplexeExtendedDetailType} from "../../mainTypes";
import { AppStateType } from "../reducers/rootReducer";
import { FilterItemDiapasonType, FilterItemType } from "./filterActions";
import { setReviews } from "./reviewsActions";

export const SET_COMPLEXES = "SET_COMPLEXES";
export const SET_LOADING = "SET_LOADING";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SORT_COMPLEXES = "SORT_COMPLEXES";
export const SET_ERROR_COMPLEXES = "SET_ERROR_COMPLEXES";
export const SET_DETAIL_COMPLEX = "SET_DETAIL_COMPLEX";


export type SetDetailComplexType = {
  type: typeof SET_DETAIL_COMPLEX,
  payload: ComplexeType & ComplexeExtendedDetailType
}

export const setDetailComplex = (complex: ComplexeType & ComplexeExtendedDetailType): SetDetailComplexType => {
  return {
    type: SET_DETAIL_COMPLEX, 
    payload: complex
  }
}

export type ErrorComplexesType = {
  type: typeof SET_ERROR_COMPLEXES,
  payload: string
}

export const setErrorText = (text: string): ErrorComplexesType => {
  return {
    type: SET_ERROR_COMPLEXES, 
    payload: text
  }
}

export type SortComplexesType = {
  type: typeof SORT_COMPLEXES,
  payload: string
}

export const sortComplexes = (sortBy: string): SortComplexesType => {
  return {
    type: SORT_COMPLEXES, 
    payload: sortBy
  }
}
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

export const fetchComplexes = (region: string | null = null, filterItems: Array<FilterItemType> | null = null, filterItemsDiapason: Array<FilterItemDiapasonType> | null = null, sortBy: string | null = null) => (dispatch: any, getState: ()=>AppStateType): void => {
  // filterItems - фильтры select'ов
  // filterItemsDiapason - фильтры полей "от" и "до" типа "Стоимость" или "Площадь" 
  dispatch(setLoading(true));
 
  const filterState = getState().filter;

  if (!region) { region = filterState.region; }
  if (!filterItems || filterItems.length == 0) { filterItems = filterState.filterItems; }
  if (!filterItemsDiapason || filterItemsDiapason.length == 0) { filterItemsDiapason = filterState.filterItemsDiapason; }
  if (!sortBy) { sortBy = filterState.sortBy; }

  let args = `&region=${region}&`;
  // переменные, определяющие участвуют ли в фильтрации конкретные параметры. Если такие параметры есть, то будет происходить доп. фильтрация
  let deadlinesValues:Array<string | number> | null = null;
  let roomsValues: Array<string | number> | null = null;
  
  // console.log(filterItems, "filterItems", getState().filter.filterItems);
  if (filterItems && filterItems.length != 0) {
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
  

  // args += `_page=${currentPage}&_limit=${perPage}`;
  
  
  Axios.get("http://localhost:3004/complexes?_embed=flats"+args)
    .then(({ data, headers }) => {
     
      const complexes = data.filter((complex: ComplexeType) => {
        const [minCostSquare, maxCostSquare, minCost, maxCost] = getMinMaxValuesFlats(complex.flats);//получаем мин/max стоимости квартир в данном комплексе
        complex.maxCost = maxCost;
        complex.minCost = minCost;
        complex.maxCostSquare = maxCostSquare;
        complex.minCostSquare = minCostSquare;
        complex.flatsGroupByRooms = getFlatsGroupByRooms(complex.flats) //возвращаем массив сгруппированных по кол-ву комнат квартир
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
        
        if (filterItemsDiapason && filterItemsDiapason.length != 0) {
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

      dispatch(setTotalCount(headers["x-total-count"] ? +headers["x-total-count"] : complexes.length));
      dispatch(setCurrentPage(1));
      dispatch(setComplexes(complexes));
      if (sortBy) {
        dispatch(sortComplexes(sortBy));
      }
      dispatch(setLoading(false));
    })
    .catch((e) => {
      console.error(e);
      dispatch(setErrorText("Произошла ошибка при загрузке жилых комплексов :("));
    })
}

export const fetchDetailComplex = (id:number) => (dispatch: any): void => {
  
  Axios.get(`http://localhost:3004/complexes?_embed=complexDetail&_embed=reviews&_embed=flats&id=${id}`)
    .then(({data})=> {
      if (!data[0]) {
        console.log("НЕТ ТАКОГО");
      } else {
        data[0].complexDetail = data[0].complexDetail[0];
        data[0].flatsGroupByRooms = getFlatsGroupByRooms(data[0].flats); //
        dispatch(setDetailComplex(data[0]));
        dispatch(setReviews(data[0].reviews));
      }
      
    }).catch((e) => {
      console.error(e);
      
    })
}

export const fetchComplexesByIds = (arrIds:Array<number>) => (dispatch: any): void => {
  
  Axios.get(`http://localhost:3004/complexes?_embed=complexDetail&_embed=flats&id=`)
    .then(({data})=> {
      if (!data[0]) {
        console.log("НЕТ ТАКОГО");
      } 
      
    }).catch((e) => {
      console.error(e);
      
    })
}





function checkInArray(arrayIncludes:Array<string | number>, arr:any, nameProp:string) {//Проверяет есть ли в массиве arrayIncludes какие-либо элементы из массива arr. Проверка по свойству nameProp элементов массива arr
 
  let inArray = arr.some((item:any) => {
      return arrayIncludes?.includes(item[nameProp]);
  });

  return inArray;
}