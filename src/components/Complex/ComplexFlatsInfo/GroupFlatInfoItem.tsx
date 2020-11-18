import React from 'react';
import classNames from 'classnames';

import { FlatsGroupByRoomsType } from '../../../mainTypes';
import { transformBigNum } from '../../../handlers/complexesHandlers';

type PropsTypes = {
  item: FlatsGroupByRoomsType,
  active: boolean,
  onClick:(room:string)=>void
}

const GroupFlatInfoItem : React.FC < PropsTypes > = ({item, active, onClick}) => {
  const onHandlerClick = () => {
    onClick(item.room);
  }
  return (
    <li className={classNames("flats__item",{"active":active})} onClick={onHandlerClick}>
          <div className="flats__item-box">
            <p className="flats__text">{item.room}
              <span className="flats__text--area"> от&nbsp;<span className="flat-area">{item.minSquare}</span>&nbsp;м2</span>
              <div className="flats__text--price">от&nbsp;<span className="flat-price">{transformBigNum(item.minCost)}</span>&nbsp;руб.</div>
            </p>
            <span className="flats__link flats__modalBtn" data-flats="4"><span className="flat-count">{item.count}</span>&nbsp;в&nbsp;продаже</span>
          </div>
    </li>

    )
}

export default React.memo(GroupFlatInfoItem);

   