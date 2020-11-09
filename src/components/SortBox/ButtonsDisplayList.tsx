import React from 'react';
import classNames from 'classnames';
import ButtonDisplay from './ButtonDisplay';

type PropsTypes = {
  className?: string,
  onClickDisplayButton?: (titleBtn: string) => void;
}

const ButtonsDisplayList : React.FC < PropsTypes > = ({className, onClickDisplayButton}) => {

  const [activeItem, setActiveItem] = React.useState("Плиткой");
  const onClickButton = (titleBtn:string) => {
    setActiveItem(titleBtn);
  }
 
  React.useEffect(() => {
    onClickDisplayButton && onClickDisplayButton(activeItem);
  }, [activeItem]);

  return (
    <div className={classNames('list-type', className)}>
      <ButtonDisplay
        title="Плиткой"
        onClick={onClickButton}
        active={activeItem === "Плиткой"}
        icon={<svg width="12" height="12" viewBox="0 0 12 12"> <path d="M0,0H5.469V5.469H0V0ZM6.531,0H12V5.469H6.531V0ZM0,6.531H5.469V12H0V6.531Zm6.531,0H12V12H6.531V6.531Z" /> </svg>} />
      
      <ButtonDisplay
        title="Списком"
        onClick={onClickButton}
        active={activeItem === "Списком"}
        icon={<svg width="12" height="12" viewBox="0 0 12 12"> <path d="M0,0H12V2.406H0V0ZM0,4.813H12V7.188H0V4.813ZM0,9.594H12V12H0V9.594Z" /> </svg>} />
      
      <ButtonDisplay
        title="На карте"
        icon={<svg width="12" height="12" viewBox="0 0 430.114 430.114"> <path id="Facebook_Places" d="M356.208,107.051c-1.531-5.738-4.64-11.852-6.94-17.205C321.746,23.704,261.611,0,213.055,0 C148.054,0,76.463,43.586,66.905,133.427v18.355c0,0.766,0.264,7.647,0.639,11.089c5.358,42.816,39.143,88.32,64.375,131.136 c27.146,45.873,55.314,90.999,83.221,136.106c17.208-29.436,34.354-59.259,51.17-87.933c4.583-8.415,9.903-16.825,14.491-24.857 c3.058-5.348,8.9-10.696,11.569-15.672c27.145-49.699,70.838-99.782,70.838-149.104v-20.262 C363.209,126.938,356.581,108.204,356.208,107.051z M214.245,199.193c-19.107,0-40.021-9.554-50.344-35.939 c-1.538-4.2-1.414-12.617-1.414-13.388v-11.852c0-33.636,28.56-48.932,53.406-48.932c30.588,0,54.245,24.472,54.245,55.06 C270.138,174.729,244.833,199.193,214.245,199.193z" /> </svg>}
      />
        
        </div>
    )
}

export default React.memo(ButtonsDisplayList);