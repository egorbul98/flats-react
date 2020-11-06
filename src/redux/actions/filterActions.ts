export const ADD_FILTER = "ADD_FILTER";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export type FilterItemType = {
  type: string,
  values: Array<ItemSelectType>
}
export type ItemSelectType = { type:string, value: string | number, index: number, checked: boolean }

export type AddFilterItemType = {
  type: typeof ADD_FILTER,
  payload: FilterItemType
}

export const addFilterItem = (filtersItems: FilterItemType):AddFilterItemType => {
  return {
    type: ADD_FILTER,
    payload: filtersItems
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

export type SetClearFilterType = {
  type: typeof CLEAR_FILTER
}

export const setClearFilter = ():SetClearFilterType => {
  return {
    type: CLEAR_FILTER
  }
}