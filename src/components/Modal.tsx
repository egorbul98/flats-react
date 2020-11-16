import React from 'react'
import classNames from 'classnames';

type PropsType = {
  onClose: ()=>void,
  open?: boolean,
  children?: React.ReactChildren | React.ReactChild,
  className?: string,
  title?: string,
}
const Modal: React.FC<PropsType> = ({ onClose, children, open, className, title }) => {
  React.useEffect(() => {
    document.body.addEventListener("click", onHandleClick, true);
    return document.body.removeEventListener("click",onHandleClick);
  }, []);

  function onHandleClick(e: any){
    if (e.target.classList.contains("modal")) {
      onClose()
    }
  }

  return (
    <section className={classNames("modal", className, {"active":open}) } >
      <div className="modal__wrapper">
        
      <div className="modal__title-box">
          <h3 className="modal__title">{title}</h3>
        <button type="button" className="modal__closeBtn" onClick={onClose}>
          <span className="visually-hidden">Закрыть окно</span>
        </button>
      </div>
      {children && <div className="modal__content">
        {children}
      </div>}
        
    </div>
    </section>
    

  //   <div class="modal-feedback modal-feedback--active">
  //   <div class="modal-feedback__wrapper">
  //     <div class="modal__title-box">
  //       <h3 class="modal__title">Добавить отзыв</h3><button type="button" class="modal__close-btn"><img
  //           src="img/modal-close.svg" alt=""></button>
  //     </div>
  //     <form action="" class="modal-feedback__form">
  //       <div class="modal-feedback__form-field"><input type="text" class="modal-feedback__form-input"
  //           placeholder="Ваше имя"></div>
  //       <div class="modal-feedback__form-field"></div><textarea class="modal-feedback__form-input" name="" id=""
  //         cols="30" rows="10" placeholder="Текст отзыва"></textarea> <button type="input"
  //         class="btn-submit-feedback pink__btn">Добавить</button>
  //     </form>
  //   </div>
  // </div>

  )
}
export default React.memo(Modal);