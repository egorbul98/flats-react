import React from 'react';
import classNames from 'classnames';

type PropsType = {
  children?: React.ReactChild | React.ReactChildren | React.FC<React.SVGProps<SVGSVGElement>>,
  tooltipText?: string,
  className?: string,
  classNameTooltip?: string,
  classNameIconWrap?: string,
}

const IconAdvantage : React.FC < PropsType > = ({children, tooltipText, className, classNameTooltip, classNameIconWrap}) => {
    
    return (
      <div className={classNames(className)}>
        <div className={classNameIconWrap}> {children} </div>
        <span className={classNames("advantages-hint", classNameTooltip)}>{tooltipText}</span>
      </div>
    )
}

export default React.memo(IconAdvantage);