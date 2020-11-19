import React from 'react';

type PropsType = {
    placeholder?: string,
    name: string,
    id?: string,
    valueName?: string,
    min: number,
    max: number,
    step: number,
    value: number | string,
    pins?:Array<string | number>,
    onChange:(name: string, value:string | number)=>void,
}

const InputRange : React.FC < PropsType > = ({placeholder, valueName, pins, id, max, min, step, value, name, onChange}) => {
    
    const onHandlerChange = (e:any) => {
        onChange(name, e.target.value);
    }

    return (
    <div className="mortgage-field-wrapper">
      <div className="mortgage-field">
        <input className="mortgage__income-input" type="text" name="mortgage-income" id="mortgage-income" placeholder={placeholder} value={value == max ? "больше "+value : value} readOnly/>
        <input type="range" id={id} className="mortgage__range" min={min} max={max} step={step} value={value} onChange={onHandlerChange}/>
      </div>
        <span className="mortgage-field__val mortgage-income__rub">{valueName}</span>
        <div className="mortgage-field-pins pins">
            {pins?.map((val, index) => <div key={index + "_pin_" + placeholder} className="pins__item">{val}</div>)}
        </div>
    </div>
    )
}

export default React.memo(InputRange);