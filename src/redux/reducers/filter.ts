import { ADD_FILTER, CLEAR_FILTER, FilterItemType, SetClearFilterType, AddFilterItemType, SetChangeFilterItemType, CHANGE_FILTER } from "../actions/filterActions";

// const initialState = {
//   areas: null as Array<string> | null,
//   metro: null as Array<string> | null,
//   deadline: null as string | null,
//   costFrom: null as number | null,
//   costTo: null as number | null,
//   complexes: null as Array<number> | null,
//   developers: null as Array<number> | null,
//   rooms: null as Array<number> | null,
//   propertiesTypes: null as Array<number> | null,
//   finish: null as string | null,
//   squareFrom: null as number | null,
//   squareTo: null as number | null,
//   bank: null as Array<number> | null,
//   payment: null as Array<number> | null,
// }

const initialState = {
  filterItems: [] as Array<FilterItemType>
}

export type StateFilterType = typeof initialState;

type ActionsTypes = SetClearFilterType | AddFilterItemType | SetChangeFilterItemType;


export const filterReducer = (state = initialState, action: ActionsTypes):StateFilterType => {
  switch (action.type) {
    case ADD_FILTER:
      
      return state;
    
    case CHANGE_FILTER:
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
    
    case CLEAR_FILTER:
      return initialState;
  
    default:
      return state;
  }
}
