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
  region: string,
  tel: number,
  name: string,
  developer: string,
  description: string,
  metro: string,
  metroDistance: number,
  area: string,
  coords: [number, number],
  minCost?: number,
  maxCost?: number,
  maxDeadline?: number,
  minCostSquare?: number,
  maxCostSquare?: number,
  address: string,
  images: Array <string>,
  totalFloor: 10,
  bank: string,
  finish: string,
  deadline: Array<DeadlineItemType>,
  flats ? : Array < FlatType >,
  recomend: number,
};
export type ComplexeExtendedDetailType = {
  complexDetail?:ComplexeCharacteristicType
};

export type ComplexeRatingType = {
  child:number,
  infr:number,
  area:number,
  safe:number,
  transport:number,
  house:number
}
export type ComplexeCharacteristicType = {
  complexId: number,
  rating: ComplexeRatingType,
  authorDesc: {
    author: string,
    smallDesc: string,
    desc: Array<{ tag: string, value: string }>,
  },
  reviews: {
    aboutComplex: Array<{ name: string, text: string, date: string}>
    aboutDeveloper: Array<{ name: string, text: string, date: string }>
  },
  complexLike:Array<{ id: number, name: string, address: string, imgSrc:string }>
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