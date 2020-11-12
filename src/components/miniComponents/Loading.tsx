import React, { CSSProperties } from 'react';
import classNames from 'classnames';
type PropsType = {
  centerVertical?: boolean,
  styleWrap?: CSSProperties
}
const Loading: React.FC<PropsType> = ({ centerVertical, styleWrap }) => {
  // 
  return (
    <div className={classNames("wrap-loading", { "verical-center": centerVertical })} style={styleWrap}>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default React.memo(Loading);