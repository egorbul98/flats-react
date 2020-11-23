import React from 'react';
import { ComplexeAuthorDescType } from '../../mainTypes';

import iconAvatar from '../../assets/img/icons/avatar.svg';

type PropsTypes = {
  descriptionObj?:ComplexeAuthorDescType
}

const ComplexAuthorDescription : React.FC < PropsTypes > = ({descriptionObj}) => {
  const contentJSX = React.useMemo(() => {
    const arr = descriptionObj?.desc.map((item, index) => {
      if (item.tag === "img") {
        return <img key={ index + "_img" } className="blog__image" src={item.value} alt="фото ЖК" width="320" height="180" />
      } else if (item.tag === "header") {
        return <b key={ index + "_header" } className="blog__note">{item.value}</b>
      } else if (item.tag === "p") {
        return <p key={ index + "_p" } className="blog__description">{item.value}</p>
      }
    })
    return arr
  }, [descriptionObj])
  
  return (
    <section className="blog" id="blog">
      <div className="blog__wrapper">
        <h2 className="blog__title">Авторское описание ЖК</h2>
        <div className="blog__header">
          <div className="blog__avatar-wrap">
            <img src={window.location.origin+iconAvatar} className="icon" alt="Аватар"/>
            {/* <img className="blog__avatar" src="img/author_photo.jpg" alt="Аватар"/> */}
          </div>
              <b className="blog__author">{descriptionObj?.author}</b>
              <small className="blog__author-description">автор сайта....</small>
              <p className="blog__description">{descriptionObj?.smallDesc}</p>
        </div>
        {contentJSX}
      </div>
    </section>
  
    )
}

export default React.memo(ComplexAuthorDescription);

   