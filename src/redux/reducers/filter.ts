import { CLEAR_FILTER, CHANGE_FILTER_DIAPASON_ITEMS, SET_REGION, CHANGE_FILTER, REMOVE_FILTER_ITEM_VALUE, ADD_FILTER_ITEM_VALUE, SET_SORT_BY, setSortByType, addFilterItemValueType, RemoveFilterItemValueType,FilterItemType, SetRegionType,SetClearFilterType, SetChangeFilterItemDiapasonType, SetChangeFilterItemType, FilterItemDiapasonType } from "../actions/filterActions";



const initialState = {
  filterItems: [] as Array<FilterItemType>,
  filterItemsDiapason: [] as Array<FilterItemDiapasonType>,
  sortBy: null as string | null,
  region: "SP" as string,
}

export type StateFilterType = typeof initialState;

type ActionsTypes = SetClearFilterType | SetChangeFilterItemType | SetChangeFilterItemDiapasonType | RemoveFilterItemValueType | addFilterItemValueType | setSortByType | SetRegionType;


export const filterReducer = (state = initialState, action: ActionsTypes):StateFilterType => {
  switch (action.type) {
    case SET_SORT_BY: {
      return {...state, sortBy: action.payload}
    }
    case CHANGE_FILTER:{//Хотим изменить сразу несколько значений в фильтре
      let newState = { ...state, filterItems: [...state.filterItems] }
      newState = changeStateFilter(newState, ["values"], "filterItems", action);
      return newState;
    }
    case CHANGE_FILTER_DIAPASON_ITEMS:{
      let newState = { ...state, filterItemsDiapason: [...state.filterItemsDiapason] }
      newState = changeStateFilter(newState, ["from", "to"], "filterItemsDiapason", action);
      return newState;
    }
    case REMOVE_FILTER_ITEM_VALUE: {//Хотим удалить конкретное значение в фильтре
      let newState = { ...state, filterItems: [...state.filterItems] }
    
      newState.filterItems.some((item) => {
        if (item.type === action.payload.type) {
          item.values = item.values.filter((item) => {
              return item.value !== action.payload.removeValue
          })
          return true;
        }
        return false;
      })

      return newState;
    }
    case ADD_FILTER_ITEM_VALUE: {//Хотим добавить конкретное значение в фильтр
      let newState = { ...state, filterItems: [...state.filterItems] }
      
      let filterItem = newState.filterItems.filter((item) => item.type === action.payload.type)[0];
      const newFilterValue = { index: action.payload.index, value: action.payload.value, checked: true };

      if (!filterItem) {
        newState.filterItems = [...newState.filterItems, { type: action.payload.type, values: [newFilterValue] }];
        return newState;
      }
      let isFound = filterItem.values.some((item) => item.value === action.payload.value);
      
      if (!isFound) {
        newState.filterItems.some((item) => {
          if (item.type === action.payload.type) {
            item.values = [...item.values, newFilterValue]
            return true;
          }
          return false;
        })
      }

      return newState;
    }
    case SET_REGION:
      return { ...state, region: action.payload };
    
    case CLEAR_FILTER:
      return initialState;
  
    default:
      return state;
  }
}
function changeStateFilter(newState: any, propsNames: Array<string>, mainProp: string, action:any) {//
  // newState - изменяемое состояние, 
  // propsNames - названия свойств объектов в mainProp, которые должны быть изменены
  // mainProp - основное свойство в основном стэйте, которое должно измениться

  const inArray = newState[mainProp].some((item: any) => {
    return item.type === action.payload.type ? true : false;
  });

  if (inArray) {
    newState[mainProp] = newState[mainProp].map((item: any) => {
      if (item.type === action.payload.type) {
        propsNames.forEach((prop) => {
          item[prop] = action.payload[prop]
        })
      }
      return item;
    })
  } else {
    newState[mainProp] = [...newState[mainProp], action.payload];
  }
  
  return newState;
}