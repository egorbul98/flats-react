import { useEffect, useState } from "react";

export const useInputValidation = (value: string,validations:{[key:string]:any}) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [errorMinLength, setErrorMinLength] = useState(false);
  const [isNumber, setIsNumber] = useState(true);
  
  useEffect(() => {
    for (const type in validations) {
      switch (type) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'minLength':
          value.length < validations[type] ? setErrorMinLength(true) : setErrorMinLength(false)
          break;
        case 'onlyNumber':
          (/\d+/.test(String(+value))) ? setIsNumber(true) : setIsNumber(false)
          break;
      }
    }
  }, [value, validations, setIsEmpty, setErrorMinLength, setIsNumber]);
  

  return {isEmpty, errorMinLength, isNumber} as const
}