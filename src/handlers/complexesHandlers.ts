import { ComplexeType, FlatsGroupByRoomsType, FlatType } from "../mainTypes";

export function calcCostSquare(cost : number, square : number) : number { //Считаем стоимость за квадратный метр
  return + (cost / square / 1000).toFixed(1);
}



export function getMinMaxValuesFlats(flats: Array<FlatType> | null = null): [number, number, number, number] {
  let minCostSquare : number = 0; //максимальная стоимость за кв/м среди всех квартир комплекса
  let maxCostSquare: number = 0; //минимальная стоимость за кв/м
  let minCost: number = 0; //минимальная стоимость
  let maxCost: number = 0; //максимальная стоимость 

  if (flats) {
    for (let i = 0; i < flats.length; i++) {
      const flat = flats[i];
      const flatCostSquare = calcCostSquare(flat.cost, flat.square);
      if (i == 0) {
        minCostSquare = maxCostSquare = flatCostSquare;
        minCost = maxCost = flat.cost;
      }
      minCostSquare = flatCostSquare < minCostSquare ? flatCostSquare : minCostSquare;
      maxCostSquare = flatCostSquare > maxCostSquare ? flatCostSquare : maxCostSquare;
      minCost = flat.cost < minCost ? flat.cost : minCost;
      maxCost = flat.cost > maxCost ? flat.cost : maxCost;
    }
  }
  
  return [minCostSquare, maxCostSquare, minCost, maxCost]
}

export function getFlatsGroupByRooms(flats: Array<FlatType> | null = null) { //
  //возвращаем массив сгруппированных по кол-ву комнат квартир, а также максимальную/минимальную стоимость за кв/м среди всех квартир 

  let flatsGroupByRooms: Array<FlatsGroupByRoomsType> = []; //массив сгруппированных по кол-ву комнат квартир
  
  if (flats) { //если квартиры в комплексе есть, то добавляем и группируем их в массив flatsGroupByRooms
   
    for (let i = 0; i < flats.length; i++) {
        const flat = flats[i];
        
        let found = flatsGroupByRooms.some((item) => {
            if (item.room === flat.room) {
                item.minCost = flat.cost < item.minCost ? flat.cost : item.minCost;
                item.maxCost = flat.cost > item.maxCost ? flat.cost : item.maxCost;
                item.minSquare = flat.square > item.minSquare ? flat.square : item.minSquare;
                return true
            } else {
                return false
            }
        })
        if (!found) {
            flatsGroupByRooms.push({room: flat.room, minCost: flat.cost, maxCost: flat.cost, minSquare: flat.square});
        }
    }
  }
  
  flatsGroupByRooms.sort((a, b) => { //Сортируем по кол-ву комнат
    return a.room > b.room ? 1 : -1;
  })
  
  return flatsGroupByRooms;
}

