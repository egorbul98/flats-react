import React from 'react'

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

type PropsType = {
  open: boolean,
  children: React.ReactChildren | React.ReactChild
}
export default function DropDown(props:PropsType) {
  return (
    <SlideDown className={'my-dropdown-slidedown'}>
      {props.open ? props.children : null}
    </SlideDown>
  )
}