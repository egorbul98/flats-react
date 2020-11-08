import React from 'react';
import classNames from 'classnames';

type PropsTypes = {
  className?: string,
  onClick?: (title: string) => void,
  title: string,
  icon?: string | React.ReactChild | React.ReactChildren,
  active?:boolean
}

const ButtonDisplay : React.FC < PropsTypes > = ({className, onClick, title, icon, active}) => {

  // const onDisplayList = () => {
  //   onClickDisplayButton && onClickDisplayButton(true);
  // }
  // const offDisplayList = () => {
  //   onClickDisplayButton && onClickDisplayButton(false);
  //   setActiveItem()
  // }
  return (
      <button type='button' className={ classNames('list-type__btn list-type__btn-tile', className, {"list-type__btn--active": active})} onClick={()=>onClick && onClick(title)}>{icon} {title}</button>
    )
}

export default React.memo(ButtonDisplay);