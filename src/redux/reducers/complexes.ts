import { ComplexeExtendedDetailType, ComplexeType} from "../../mainTypes";
import { SET_COMPLEXES, SET_DETAIL_COMPLEX, SORT_COMPLEXES, SET_TOTAL_COUNT, SET_CURRENT_PAGE, SET_LOADING, SET_ERROR_COMPLEXES, ADD_FAVORITE_ID_COMPLEX, REMOVE_FAVORITE_ID_COMPLEX, SET_SEARCH_TEXT} from "../actions/complexesActions";
import { ErrorComplexesType, SetComplexesType, SetTotalCountType, SetCurrentPageType, SetLoadingType,SortComplexesType,  SetDetailComplexType, AddFavoriteIdComplexType, RemoveFavoriteIdComplexType, SetSearchTextType} from "../actions/complexesActions";

const initialState = {
  items: [] as Array<ComplexeType>,
  favoriteItemsIds: [] as Array<number>,
  searchText: '' as string,
  currentPage: 1 as number,
  perPage: 4 as number,
  totalCount: 0 as number,
  isLoading: false as boolean,
  errorText: '' as string,
  detailComplex: null as ComplexeType & ComplexeExtendedDetailType | null, //данные для страницы detailPage,
}
export type StateComplexesType = typeof initialState;
 
type ActionsTypes = SetComplexesType | SetTotalCountType | SetCurrentPageType | SetLoadingType | SortComplexesType | ErrorComplexesType | SetDetailComplexType | AddFavoriteIdComplexType| RemoveFavoriteIdComplexType | SetSearchTextType;

export const ComplexesReducer = (state = initialState, action:ActionsTypes):StateComplexesType => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    
    case SET_COMPLEXES:
      return { ...state, items: action.payload };
    
    case SET_DETAIL_COMPLEX:
      return { ...state, detailComplex: action.payload };
    
    case SORT_COMPLEXES:
      let newState = { ...state, items:[...state.items]};
      const sortBy = action.payload;
      if (["cost", "costSquare", "deadline", "recomend"].includes(sortBy)) {
        let sortPropName = "";
        if (sortBy === "cost") {
          sortPropName = "minCost";
        }else if (sortBy === "costSquare") {
          sortPropName = "minCostSquare";
        }else if(sortBy === "deadline"){
          sortPropName = "maxDeadline";
        }else if(sortBy === "recomend"){
          sortPropName = "recomend";
        }
       
        newState.items.sort((a: any, b: any) => {
          if (a[sortPropName] && b[sortPropName]) {
            if (sortBy === "deadline") {
              return a[sortPropName] < b[sortPropName] ? 1 : -1;
            }
            return a[sortPropName] > b[sortPropName] ? 1 : -1;
          } else {
            return -1;
          }
        })
      };
      

      return newState;
    
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    
    case ADD_FAVORITE_ID_COMPLEX:
      return { ...state, favoriteItemsIds: [...state.favoriteItemsIds, action.payload]};
    
    case REMOVE_FAVORITE_ID_COMPLEX:
      return { ...state, favoriteItemsIds: [...state.favoriteItemsIds.filter((id)=>id!==action.payload)] };
    
    case SET_ERROR_COMPLEXES:
      return {...state, errorText: action.payload};
    default:
      return state;
  }
}
