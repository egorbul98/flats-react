import React from 'react';

type PropsType = {
    children?: React.ReactChild | React.ReactChildren
}

const ButtonPhone : React.FC < PropsType > = ({children}) => {
    const [active,
        setActive] = React.useState(false);

    const handleClick = () => {
        setActive(!active);
    }
    return (
        <button type="button" className="btn-phone" onClick={handleClick}>
            <img className="img-phone" src="img/icon-phone.svg" alt=""/>
            <span className="text">{active
                    ? children
                    : "+7 Показать телефон"}</span>
        </button>
    )
}

export default React.memo(ButtonPhone);