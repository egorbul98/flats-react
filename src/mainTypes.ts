export type FlatType = {
  id: number,
  square: number,
  complexId: number,
  cost: number,
  finish: string,
  floor: number,
  num: number,
  room: string,
  img: string,
  corpus: number
};

export type ComplexeType = {
  id: number,
  region: string,
  tel: number,
  name: string,
  developer: string,
  advantages: Array<string>,
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
  flatsGroupByRooms?: Array<FlatsGroupByRoomsType>,
  recomend: number,
};
export type FlatsGroupByRoomsType = {
  room: string,
  minCost: number,
  maxCost: number,
  minSquare: number,
  count: number
}
export type ComplexeExtendedDetailType = {
  complexDetail ? : ComplexeCharacteristicType,
  reviews: Array < ReviewType >,
};
export type DocumentType = {
  name: string,
  weight: string,
  src: string,
}
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
export type ComplexLikeType = { id: number, name: string, address: string, imgSrc: string, metro: string, metroDistance: number }

export type ComplexeVideoType = {
  videoSrc:string,
  imgSrc:string
}

export type ComplexeCharacteristicType = {
  complexId: number,
  rating: ComplexeRatingType,
  authorDesc: ComplexeAuthorDescType,
  complexLike: Array<ComplexLikeType>,
  documents: Array<DocumentType>,
  videos: Array<ComplexeVideoType>,
  characteristics: Array<CharacteristicType>
};

export type CharacteristicType =  {
  title: string,
  items: Array<CharacteristicInnerItemType>
}
export type CharacteristicInnerItemType =  {
  title: string,
  value: string | number
}

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