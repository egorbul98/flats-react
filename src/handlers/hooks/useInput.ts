import { useState } from "react";
import {useInputValidation} from './useInputValidation';
export const useInput = (initialValue:any, validations:{[key:string]:any} ) => {
  const [value, setValue] = useState<any>(initialValue);
  const valid = useInputValidation(value, validations);
  
  const onChange = (e: any) => {
    if (validations.hasOwnProperty("onlyNumber")) {
      (/\d+/.test(String(+e.target.value))) && setValue(e.target.value)
    } else {
      setValue(e.target.value)
    }
  }

  return {value, onChange, valid} as const
}