export type FlatType = {
  id: number,
  square: number,
  complexId: number,
  cost: number,
  type: string,
  floor: number,
  num: number,
  room: number,
  img: string,
  corpus: number
};

export type ComplexeType = {
  id: number,
  tel: number,
  name: string,
  developer: string,
  description: string,
  metro: string,
  metroDistance: number,
  area: string,
  // img: string,
  coords: [number, number],
  minCost?: number,
  maxCost?: number,
  // minSquare: number,
  // maxSquare: number,
  minCostSquare?: number,
  maxCostSquare?: number,
  address: string,
  images: Array < string > ,
  totalFloor: 10,
  bank: string,
  finish: string,
  deadline: Array<DeadlineItemType>,
  flats ? : Array < FlatType >
};

type DeadlineItemType = {
  corpus: number,
  year: number
}
export type SelectsDataType = {
  name: string,
  placeholder: string,
  items: Array < string | number> ,
  activeItems? : Array < string >
}
export type ItemSelectType = { value: string | number, index: number, checked: boolean }