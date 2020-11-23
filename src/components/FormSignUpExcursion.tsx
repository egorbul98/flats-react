import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';

import iconArrow from '../assets/img/arrow__down-input.svg';
import FormUserInputs from './miniComponents/FormUserInputs';
import { useInput } from '../handlers/hooks/useInput';

const timeItems = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
type PropTypes = {
  onClose?:()=>void
}
const FormSignUpExcursion:React.FC<PropTypes> = ({onClose}) => {
  const [startDate, setStartDate] = useState<Date | any>(new Date());
  const [time, setTime] = useState<string>("13:00");
  const [valid, setValid] = useState(false);
  const onChangeInputs = (name:ReturnType<typeof useInput>, tel:ReturnType<typeof useInput>) => {
    name.valid.isEmpty || tel.valid.isEmpty ? setValid(false) : setValid(true);
  }
  const onSend = () => {
    if (valid) {
      onClose && onClose()
    }
  }
  return (
    <div>
      <p className="modal__text">Выберите удобную дату и время</p>
  
  <div className="modal__content">
    <div className="modal__content-left ">
      <DatePicker 
        calendarClassName="main-datepicker" 
        selected={startDate} onChange={date => setStartDate(date)}
        locale={ru} 
        inline />
     
      <div className="excursion-field">
        <div className="excursion__select-arrow">
          <img src={window.location.origin+iconArrow}/>
        </div>
          <select onChange={(e) => setTime(e.target.value)} className='excursion__select-time' name="" id="excursion__select-time" value={time}>
              {timeItems.map((itemVal)=><option value={itemVal} key={itemVal}>{itemVal}</option>)}
          </select>
      </div>
    </div>
    <div className="modal__content-right">
      <form method="#" action="#" className="consultation__form">
            <div className="consultation__form-fields">
              <FormUserInputs onChange={onChangeInputs } classNamesInputs="excursion__form-input"/>
          
        </div>
        <div className="date-info">
            <span className="date">{startDate.getDate() +"."+(+startDate.getMonth()+1)  }</span>
          <span className="time">{time}</span>
        </div>
        
        <button type="button" className="modal__btn pink__btn" onClick={onSend} disabled={!valid}>Записаться</button>
      </form>

    </div>
  </div>

    </div>
  );
}

export default React.memo(FormSignUpExcursion);
