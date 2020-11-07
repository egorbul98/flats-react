import { ItemSelectType } from "../../mainTypes";

export const APPLY_FILTER = "APPLY_FILTER";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export type FilterItemType = {
  type: string,
  values: Array<ItemSelectType>
}

export type ApplyFilterItemType = {
  type: typeof APPLY_FILTER
}

export const applyFilterItem = ():ApplyFilterItemType => {
  return {
    type: APPLY_FILTER
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