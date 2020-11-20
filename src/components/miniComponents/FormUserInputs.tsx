import React, { useEffect } from 'react';
import { useInput } from '../../handlers/hooks/useInput';

type PropTypes = {
  onChange?: (name: ReturnType<typeof useInput>, tel: ReturnType<typeof useInput>) => void,
  classNamesInputs?:string
}
const FormUserInputs: React.FC<PropTypes> = ({ onChange, classNamesInputs }) => {
  
  const name = useInput('', {"isEmpty":true});
  const tel = useInput('', { "onlyNumber": true, "isEmpty": true });
  
  useEffect(() => {
    onChange && onChange(name, tel);
  }, [name, tel, onChange]);
  return (
    <div>
      <input type="text" placeholder="Ваше имя" name="name" value={name.value} onChange={ name.onChange } className={classNamesInputs}/>
      <input type="text" placeholder="Ваш номер телефона" name="tel" value={ tel.value} onChange={ tel.onChange} className={classNamesInputs}/>
    </div>
  );
}

export default React.memo(FormUserInputs);
