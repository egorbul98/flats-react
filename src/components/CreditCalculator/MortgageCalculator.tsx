import React, {useEffect, useRef, useState} from 'react';
import InputRange from '../miniComponents/InputRange';

type PropsTypes = {
    onClose:()=>void
}

const pinsIncome = ["35 000", "50 000", "65 000", "80 000", "100 000"]
const pinsWork = [ 1, 3, 5, 7, 9, 11, 13, 15 ]
const initialState:{[key:string]:any} = { incom: 45000, work: 2, payment: 500000, name: '', tel: '', matCapital: false };

const MortgageCalculator : React.FC < PropsTypes > = ({onClose}) => {
    const [values, setValues] = useState(initialState);
    const [valid, setValid] = useState(true);
    const [result, setResult] = useState(65);

    useEffect(() => { //считаем процент одобрения кредита
        let sum = 65;
        if (values.work > 5) { sum++; }
        if (values.work > 10) { sum++; }
        if (values.work == 15) { sum++; }
        sum +=  Math.round(values.payment * 0.00001 + (values.incom - 35000) / 2950);
        if (sum > 93) { sum = 93; }
        setResult(sum);
    }, [values]);

    const onChangeInput = (name : string, value : string | number) => {
        setValues({ ...values, [name]: value })
    }
    const onHandleChangeInput = (e: any) => {
        e.target.name === "tel" || e.target.name === "payment"
            ? (/\d+/.test(String(+e.target.value))) && onChangeInput(e.target.name, e.target.value)
            : e.target.name === "matCapital"
                ? onChangeInput(e.target.name, e.target.checked)
                : onChangeInput(e.target.name, e.target.value);
        setValid(true);
    }

    const onSubmit = () => {
        let validate = true;
        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                const val = values[key];
                if (val === "") {
                    validate = false;
                    setValid(false);
                }
            }
        }
        if (validate) {
            // здесь данные можно отправить куданить
            onClose();
        }
    }

    return ( <>
        <div className="modal__content mortgage">
        <form action="#" method="#" className="mortgage__form">
            <div className="mortgage__income">
                <label htmlFor="mortgage-income" className="mortgage__label">Месячный доход семьи</label>
                <InputRange
                    id="mortgage-incom"
                    name="incom"
                    placeholder="50 000"
                    valueName="руб."
                    pins={pinsIncome}
                    min={25000}
                    max={100000}
                    step={1000}
                    value={values.incom}
                    onChange={onChangeInput}/>
            </div>
            <div className="mortgage__work">
                <label htmlFor="mortgage-work" className="mortgage__label">Общий трудовой стаж</label>
                <InputRange
                    id="mortgage__work-range"
                    name="work"
                    placeholder="2"
                    valueName="год/лет"
                    pins={pinsWork}
                    min={1}
                    max={15}
                    step={1}
                    value={values.work}
                    onChange={onChangeInput}/>

            </div>
            <div className="mortgage__payment">
                <label htmlFor="mortgage-payment" className="mortgage__label">Первоначальный взнос</label>
                <div className="mortgage-field-wrapper">
                    <div className="mortgage-field">
                        <input
                                className="mortgage__payment-input"
                                type="text"
                                name="payment"
                                id="payment"
                                placeholder="500 000"
                                value={values.payment != 0 ? values.payment : ''}
                                onChange={ onHandleChangeInput }/>
                    </div>
                    <span className="mortgage-field__val mortgage-payment__rub">руб.</span>
                </div>
            </div>

            <div className="mortgage__capital">
                <p className="mortgage__capital-text">Наличие материнского капитала и субсидий</p>
                <div className="mortgage__capital-inner">
                    <input type="checkbox" id="mortgage-capital" name="matCapital" value="matCapital" checked={values.matCapital} onChange={ onHandleChangeInput}/>
                    <label htmlFor="mortgage-capital">Да</label>
                </div>
            </div>
            <div className="mortgage-footer">
                <div className="mortgage-chance-wrapper">
                    <div className="mortgage__chance">
                        <p className="mortgage__expectancy">Вероятность одобрения:</p>
                        <span className="mortgage__expectancy-value">
                            <span className="mortgage__expectancy-value-wrap">{result}</span>
                            <span className="mortgage__expectancy-percent">%</span>
                        </span>
                    </div>

                    <div className="mortgage__info">
                            <input type="text" placeholder="Ваше имя" name="name" value={values.name} onChange={ onHandleChangeInput}/>
                            <input type="text" placeholder="Ваш номер телефона" name="tel" value={ values.tel} onChange={onHandleChangeInput}/>
                    </div>
                </div>

                <div className="mortgage__info-box">
                        <b className="mortgage__security">Мы не передаем Ваши данные третьим лицам</b>
                        { !valid && <small className="mortgage__form-invalid">Вы не заполнили все поля</small>}

                </div>
            </div>
        </form>
        </div>
        < button type="button" className="modal__btn pink__btn" onClick={onSubmit}> Отправить </button>

        </>)
}

export default React.memo(MortgageCalculator); 