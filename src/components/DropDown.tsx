import React from 'react'

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

type PropsType = {
  open: boolean,
  children: React.ReactChildren | React.ReactChild
}
const DropDown: React.FC<PropsType> = (props) => {
  return (
    <SlideDown className={'my-dropdown-slidedown'}>
      {props.open ? props.children : null}
    </SlideDown>
  )
}
export default React.memo(DropDown);