import React, { ImgHTMLAttributes } from 'react';
import classNames from 'classnames';

import ButtonsDisplayList from './ButtonsDisplayList';
import TypeRoomsList from './FilterTypeRoomsList';

import starImg from '../../assets/img/bookmark-star.svg';
import coinStackImg from '../../assets/img/coin-stack.svg';
import clockImg from '../../assets/img/clock.svg';
import placeholderRedImg from '../../assets/img/placeholder-red.svg';

type PropsTypes = {
  className?: string,
  onClick?: (name: string) => void,
  title: string,
  name: string,
  icon?: string,
  active?:boolean
}


const ButtonSortBy : React.FC < PropsTypes > = ({icon, title, name, active, className, onClick}) => {

  const onHandlerClick = () => {
    onClick && onClick(name);
  }
  return (
    <button type='button'
      className={classNames("list-character__btn", className, { "list-character__btn--active": active })}
      onClick={onHandlerClick}
    >
      <img src={icon} alt="" />{title}
    </button>
    )
}

export default React.memo(ButtonSortBy);