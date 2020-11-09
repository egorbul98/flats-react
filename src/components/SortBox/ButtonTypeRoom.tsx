import React from 'react';
import classNames from 'classnames';

type PropsTypes = {
  className?: string,
  onClick?: (title: string, index:number, isActive:boolean | undefined) => void,
  title: string,
  icon?: string | React.ReactChild | React.ReactChildren,
  active?: boolean,
  index:number
}

const ButtonTypeRoom : React.FC < PropsTypes > = ({className, onClick, title, active, index}) => {

  const onHandleClick = () => {
    onClick && onClick(title, index, active);
  }
  const smallTitle = React.useMemo(() => {
    return title.replace("-комнатная кв.", " ккв");
  }, [title])

  return (
    <button 
      type="button" 
      className={ classNames("list-type-flats__btn pink__btn", {"list-type-flats__btn--active":active}, className) } 
      onClick={onHandleClick}
      data-index={index}
     ><span
      className="text-large">{title}</span><span className="text-small">{smallTitle}</span></button>
    )
}

export default React.memo(ButtonTypeRoom);