import React, {useEffect, useState} from 'react';
import Modal from '../Modal';
import MortgageCalculator from './MortgageCalculator';

type PropsTypes = {}

const CreditCalculator : React.FC < PropsTypes > = () => {
    const [totalSum,
        setTotalSum] = useState(0);
    const [values,
        setValues] = useState({
        contribution: 0, //Сумма кредита
        rate: 0, //Ставка
        time: 0
    }); //Ставка

    useEffect(() => {
        const result = +(((values.contribution * values.rate / 100 / 12)) * values.time).toFixed(1);
        setTotalSum(result);
    }, [values]);

    const onHandleChange = (e : any) => {
        const nameProp = e.target.name;
        const value = e.target.value;

        if (/\d+/.test(String(+ value))) { //ввод только цифр
            setValues({ ...values, [nameProp]: value });
        }
    }

    const [openModal, setOpenModal] = React.useState(false);

    const onOpenModal = () => {
        setOpenModal(true)
    }
    const onCloseModal = () => {
        setOpenModal(false)
    }

  return (<>
    <section className="credit" id="credit">
        <div className="credit__wrapper">
            <h2 className="credit__title">Ипотека от банков</h2>

            <div className="credit__calculator calculator">
                <div className="calculator__wrapper">
                    <h2 className="calculator__title">Калькулятор</h2>
                    <small className="calculator__description">Введите параметры для расчета ежемесячного платежа</small>

                    <form action="" method="" className="calculator__form">
                        <div className="calculator__form-box">
                            <label htmlFor="contribution" className="calculator__form-label">Сумма кредита</label>
                            <input
                                type="text"
                                id="contribution"
                                name="contribution"
                                placeholder="руб."
                                value={values.contribution != 0
                                ? values.contribution
                                : ''}
                                onChange={onHandleChange}/>
                        </div>
                        <div className="calculator__form-box">
                            <label htmlFor="rate" className="calculator__form-label">Ставка</label>
                            <input
                                type="text"
                                id="rate"
                                name="rate"
                                placeholder="%"
                                value={values.rate != 0
                                ? values.rate
                                : ''}
                                onChange={onHandleChange}/>
                        </div>
                        <div className="calculator__form-box">
                            <label htmlFor="time" className="calculator__form-label">Срок</label>
                            <input
                                type="text"
                                id="time"
                                name="time"
                                className='inputTi'
                                placeholder="Кол-во лет"
                                value={values.time != 0
                                ? values.time
                                : ''}
                                onChange={onHandleChange}/>
                        </div>
                    </form>

                    <p className="calculator__text">Ваш ежемесячный платеж составит:<b className="calculator__result">{totalSum} руб.</b> </p>
                    <button
                        type="submit"
                        id='btnOpenMortgage'
                        className="calculator__btn pink__btn openModal__btn"
                        onClick={onOpenModal}>Подать заявки во все банки</button>
                </div>
            </div>

        </div>
    </section>

    <Modal onClose={onCloseModal} open={openModal} title="Подать заявки во все банки " classNameInnerWrapper={"mortgage__wrapper modal__wrapper"}>
          <MortgageCalculator onClose={ onCloseModal }/>
    </Modal>
    
    </>
  
    )
}

export default React.memo(CreditCalculator);