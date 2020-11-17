import React, { useState } from 'react';

import iconAvatar from '../../assets/img/icons/avatar.svg';
import iconArrow from '../../assets/img/arrow__down-input-grey.svg';
import { ReviewType } from '../../mainTypes';

import { useDispatch } from 'react-redux';
import { addComplexReview } from '../../redux/actions/reviewsActions';

type PropsTypes = {
  complexId:number,
  about: string,
  onCloseModal: ()=>void
}
const ReviewAdd: React.FC<PropsTypes> = ({ complexId, about, onCloseModal }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onAddReview = () => {
    const date = new Date();
    const dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + ", " + date.getHours() + ":" + date.getMinutes();
    if (name && text) {
      dispatch(addComplexReview({ complexId: +complexId, date: dateStr, name: name, text: text, about: about }));
      setText('');
      setName('');
      onCloseModal();
    }
  }

  return (
    <form action="" className="modal-feedback__form">
        <div className="modal-feedback__form-field">
            <input type="text" className="modal-feedback__form-input" placeholder="Ваше имя" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <textarea className="modal-feedback__form-input" name="" id="" cols={30} rows={10} placeholder="Текст отзыва" onChange={(e)=>setText(e.target.value)}>
        </textarea>
        <button type="button" className="btn-submit-feedback pink__btn" onClick={onAddReview}>Добавить</button>
    </form>
    )
}

export default React.memo(ReviewAdd);

   