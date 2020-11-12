import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectsDataType } from "../../mainTypes";
import { fetchComplexes } from "../../redux/actions/complexesActions";
import { FilterItemDiapasonType, FilterItemType, setChangeFilterItem, setChangeFilterItemDiapason, setClearFilter } from "../../redux/actions/filterActions";
import { AppStateType } from "../../redux/reducers/rootReducer";

import { area, bank, deadline, developer, finish, metroMOS, metroSP, name, payment, propertiesTypes, rooms } from './../../assets/data';

let dataSelectTop:Array<SelectsDataType> = [
  {name: "area", placeholder:"Район:", items: area},
  {name: "metro", placeholder:"Метро:", items: metroSP},
  {name: "deadline", placeholder:"Срок сдачи:", items: deadline},
]
const dataSelectMiddle:Array<SelectsDataType> = [
  {name: "name", placeholder:"Комплекс:", items: name},
  {name: "developer", placeholder:"Застройщик:", items: developer},
  {name: "rooms", placeholder:"Тип квартиры:", items: rooms},
  { name: "propertiesTypes", placeholder: "Тип собственности:", items: propertiesTypes },
  {name: "finish", placeholder:"Отделка:", items: finish},
]
const dataSelectBottom:Array<SelectsDataType> = [
  {name: "bank", placeholder:"Банк:", items: bank},
  {name: "payment", placeholder:"Оплата:", items: payment}
]



export const useFilter = () => {
  const dispatch = useDispatch();
  const {filterItems, filterItemsDiapason, region} = useSelector(({ filter}:AppStateType) => {
    return {
        filterItems: filter.filterItems,
        filterItemsDiapason: filter.filterItemsDiapason,
        region: filter.region
      }
  })

  useEffect(() => {
    dataSelectTop = dataSelectTop.map((item) => {
        if (item.name === "metro") {
            region === "MOS" ? item.items = metroMOS : item.items = metroSP
        }
        return item;
    });
  }, [region]);
  
  const onChangeFilterItem = useCallback(({ type, values }: FilterItemType) => {//Добавляет фильтры в redux
      dispatch(setChangeFilterItem({ type, values }))
  }, [dispatch]);

  const onChangeFilterItemDiapason = useCallback(({ type, from, to }: FilterItemDiapasonType) => {//Добавляет фильтры в redux. Фильтры с диапазоном знаечний, например "Стоимость"
      dispatch(setChangeFilterItemDiapason({ type, from, to }))
  }, [dispatch]);
  
  const onClearFilter = useCallback(() => {//очищаем фильтры
      dispatch(setClearFilter())
      dispatch(fetchComplexes())
  }, [dispatch]);

  const onApplyFilter = useCallback(() => {//применяем фильтры
    dispatch(fetchComplexes())
  }, [dispatch]);

  return [filterItems, filterItemsDiapason, region, onChangeFilterItem, onChangeFilterItemDiapason, onClearFilter, onApplyFilter]
}