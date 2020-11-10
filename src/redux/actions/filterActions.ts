import { ItemSelectType } from "../../mainTypes";

export const CHANGE_FILTER = "CHANGE_FILTER";
export const CHANGE_FILTER_DIAPASON_ITEMS = "CHANGE_FILTER_DIAPASON_ITEMS";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const REMOVE_FILTER_ITEM_VALUE = "REMOVE_FILTER_ITEM_VALUE";
export const ADD_FILTER_ITEM_VALUE = "ADD_FILTER_ITEM_VALUE";
export const SET_SORT_BY = "SET_SORT_BY";

export type FilterItemType = {
  type: string,
  values: Array<ItemSelectType>
}
export type FilterItemDiapasonType = {
  type: string,
  from: number,
  to: number,
}


export type setSortByType = {
  type: typeof SET_SORT_BY,
  payload: string
}

export const setSortBy = (sortBy: string):setSortByType => {
  return {
    type: SET_SORT_BY,
    payload: sortBy
  }
}


export type addFilterItemValueType = {
  type: typeof ADD_FILTER_ITEM_VALUE,
  payload: {type: string, index: number, value: string | number}
}

export const addFilterItemValue = (type: string, index:number, value: string | number):addFilterItemValueType => {
  return {
    type: ADD_FILTER_ITEM_VALUE,
    payload: {type, index, value}
  }
}

export type RemoveFilterItemValueType = {
  type: typeof REMOVE_FILTER_ITEM_VALUE,
  payload: {type: string, removeValue: string | number}
}

export const removeFilterItemValue = (type: string, removeValue: string | number):RemoveFilterItemValueType => {
  return {
    type: REMOVE_FILTER_ITEM_VALUE,
    payload: {type, removeValue}
  }
}


export type SetChangeFilterItemType = {
  type: typeof CHANGE_FILTER,
  payload: FilterItemType
}

export const setChangeFilterItem = (filterItem: FilterItemType):SetChangeFilterItemType => {
  return {
    type: CHANGE_FILTER,
    payload: filterItem
  }
}

export type SetChangeFilterItemDiapasonType = {
  type: typeof CHANGE_FILTER_DIAPASON_ITEMS,
  payload: FilterItemDiapasonType
}

export const setChangeFilterItemDiapason = (filterItem: FilterItemDiapasonType):SetChangeFilterItemDiapasonType => {
  return {
    type: CHANGE_FILTER_DIAPASON_ITEMS,
    payload: filterItem
  }
}

export type SetClearFilterType = {
  type: typeof CLEAR_FILTER
}

export const setClearFilter = ():SetClearFilterType => {
  return {
    type: CLEAR_FILTER
  }
}