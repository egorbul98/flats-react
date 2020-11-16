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
  minCost ? : number,
  maxCost ? : number,
  maxDeadline ? : number,
  minCostSquare ? : number,
  maxCostSquare ? : number,
  address: string,
  images: Array < string > ,
  totalFloor: 10,
  bank: string,
  finish: string,
  deadline: Array < DeadlineItemType > ,
  flats ? : Array < FlatType > ,
  recomend: number,
};
export type ComplexeExtendedDetailType = {
  complexDetail ? : ComplexeCharacteristicType,
  reviews: Array < ReviewType >,
};

export type ComplexeRatingType = {
  child: number,
  infr: number,
  area: number,
  safe: number,
  transport: number,
  house: number
}
export type ComplexeAuthorDescType = {
  author: string,
  smallDesc: string,
  desc: Array < { tag: string, value: string } > ,
}
export type ReviewType = {
  id: number,
  complexId: number,
  about: string,
  name: string,
  text: string,
  date: string
}

export type ComplexeCharacteristicType = {
  complexId: number,
  rating: ComplexeRatingType,
  authorDesc: ComplexeAuthorDescType,
  reviews: {
    aboutComplex: Array < ReviewType >,
    aboutDeveloper: Array < ReviewType >
  },
  complexLike: Array < { id: number, name: string, address: string, imgSrc: string } >
};

type DeadlineItemType = {
  corpus: number,
  year: number
}
export type SelectsDataType = {
  name: string,
  placeholder: string,
  items: Array < string | number > ,
  activeItems ? : Array < string >
}
export type ItemSelectType = {
  value: string | number,
  index: number,
  checked: boolean
}