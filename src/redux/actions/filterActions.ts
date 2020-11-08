import { ItemSelectType } from "../../mainTypes";

export const CHANGE_FILTER = "CHANGE_FILTER";
export const CHANGE_FILTER_DIAPASON_ITEMS = "CHANGE_FILTER_DIAPASON_ITEMS";
export const CLEAR_FILTER = "CLEAR_FILTER";

export type FilterItemType = {
  type: string,
  values: Array<ItemSelectType>
}
export type FilterItemDiapasonType = {
  type: string,
  from: number,
  to: number,
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