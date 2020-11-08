import { CLEAR_FILTER, CHANGE_FILTER_DIAPASON_ITEMS, CHANGE_FILTER, FilterItemType, SetClearFilterType, SetChangeFilterItemDiapasonType, SetChangeFilterItemType, FilterItemDiapasonType } from "../actions/filterActions";

const initialState = {
  filterItems: [] as Array<FilterItemType>,
  filterItemsDiapason: [] as Array<FilterItemDiapasonType>,
}

export type StateFilterType = typeof initialState;

type ActionsTypes = SetClearFilterType | SetChangeFilterItemType | SetChangeFilterItemDiapasonType;


export const filterReducer = (state = initialState, action: ActionsTypes):StateFilterType => {
  switch (action.type) {
    case CHANGE_FILTER:{
      let newState = { ...state, filterItems: [...state.filterItems] }

      const inArray = newState.filterItems.some((item) => {
        return item.type === action.payload.type ? true : false;
      });
      if (inArray) {
        newState.filterItems.map((item) => {
          if (item.type === action.payload.type) {
            item.values = action.payload.values
          }
          return item;
        })
      } else {
        newState.filterItems.push(action.payload);
      }
      
      return newState;
    }
    case CHANGE_FILTER_DIAPASON_ITEMS:{
      let newState = { ...state, filterItemsDiapason: [...state.filterItemsDiapason] }

      const inArray = newState.filterItemsDiapason.some((item) => {
        return item.type === action.payload.type ? true : false;
      });
      if (inArray) {
        newState.filterItemsDiapason.map((item) => {
          if (item.type === action.payload.type) {
            item.from = action.payload.from
            item.to = action.payload.to
          }
          return item;
        })
      } else {
        newState.filterItemsDiapason.push(action.payload);
      }
      
      return newState;}
    case CLEAR_FILTER:
      return initialState;
  
    default:
      return state;
  }
}
