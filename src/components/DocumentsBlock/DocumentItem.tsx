import React from 'react';

type PropsTypes = {
  name: string,
  weight: string,
  src: string
}

const DocumentItem : React.FC < PropsTypes > = ({name, weight, src}) => {

  return (
    <a href={src} target="_blank" className="documents__item fancybox">
        <p className="documents__item-name">{name}</p>
        <span className="documents__item-size">{weight}</span>
    </a>
    )
}

export default React.memo(DocumentItem);

   