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
  deadline: number,
  typeProperty: number,
  bank: string,
  payment: string,
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
  img: string,
  coords: [number, number],
  minCost: number,
  maxCost: number,
  minSquare: number,
  maxSquare: number,
  minCostSquare: number,
  maxCostSquare: number,
  address: string,
  images: Array<string>,
  totalFloor: 10,
  flats?:Array<FlatType>
};