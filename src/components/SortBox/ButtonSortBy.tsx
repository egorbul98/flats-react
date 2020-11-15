import React from 'react';
import classNames from 'classnames';


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
    !active && onClick && onClick(name);
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