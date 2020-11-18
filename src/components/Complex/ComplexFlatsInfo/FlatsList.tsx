import React from 'react';
import classNames from 'classnames';
import {FlatType} from '../../../mainTypes';
import iconFlat from '../../../assets/img/icon-flats.png';
import { transformBigNum } from '../../../handlers/complexesHandlers';
type PropsTypes = {
  flats: Array<FlatType>,
  onClickFlat?: (id: number, img: string) => void,
  idActiveFlat?:number
}

const ComplexFlatsInfo: React.FC<PropsTypes> = ({ flats, onClickFlat, idActiveFlat }) => {
  
  return ( <>
    <div className="flats-box-list">
      {flats.map((item, i) => {
        return <Flat key={i + "_flat-item"} {...item} onClick={onClickFlat} active={idActiveFlat === item.id}/>
        })}
    </div>

    {/* <div className="catalog-pagination" >
      <div className="catalog-pagination__list hidden"><div className="catalog-pagination__item">1</div> </div>
      <button type="button" className="btn-show-more pink__btn hidden">Показать еще</button>
    </div>  */}
    
      </>)
}
type PropsFlatTypes = {
  id: number,
  square: number
  cost: number
  finish: string,
  floor: number
  img: string,
  active?:boolean,
  onClick?: (id: number, img: string) => void,
}
const Flat: React.FC<PropsFlatTypes> = React.memo(({ active,id, square, cost, finish, floor, img, onClick }) => {
  const onHandleClick = () => {
    onClick && onClick(id, img);
  }
  return (
    <div className={classNames("flats-box-list__item", {"active": active}) } onClick={onHandleClick}>
        <div className="icon">
            <img src={iconFlat} alt="flat"/>
        </div>
        <div className="square">
            <div>{square} м2</div>
        </div>
        <div className="floor">
        <div>{floor}</div>
        </div>
        <div className="type">
            <div>{finish}</div>
        </div>
        <div className="cost">
            <div>{transformBigNum(cost)} руб.</div>
        </div>
    </div>
  )
})
export default React.memo(ComplexFlatsInfo);
