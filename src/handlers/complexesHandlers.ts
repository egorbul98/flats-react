import { ComplexeType } from "../mainTypes";

export function calcCostSquare(cost : number, square : number) : number { //Считаем стоимость за квадратный метр
  return + (cost / square / 1000).toFixed(1);
}

export type FlatsGroupByRoomsType = {
  room: number,
  minCost: number,
  maxCost: number,
  minSquare: number
}


export function getFlatsGroupByRooms(complex: ComplexeType) { //
  //возвращаем массив сгруппированных по кол-ву комнат квартир, а также максимальную/минимальную стоимость за кв/м среди всех квартир 

  let flatsGroupByRooms: Array<FlatsGroupByRoomsType> = []; //массив сгруппированных по кол-ву комнат квартир
  let minCostSquare : number = 0; //максимальная стоимость за кв/м среди всех квартир комплекса
  let maxCostSquare: number = 0; //минимальная стоимость за кв/м
  
  if (complex.flats) { //если квартиры в комплексе есть, то добавляем и группируем их в массив flatsGroupByRooms
    
    for (let i = 0; i < complex.flats.length; i++) {
        const flat = complex.flats[i];
        const flatCostSquare = calcCostSquare(flat.cost, flat.square);
        if (i == 0) {
            minCostSquare = flatCostSquare;
        }
        minCostSquare = flatCostSquare < minCostSquare ? flatCostSquare : minCostSquare;
        maxCostSquare = flatCostSquare > maxCostSquare ? flatCostSquare : maxCostSquare;

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
  
  return [flatsGroupByRooms, minCostSquare, maxCostSquare] as const;
}

