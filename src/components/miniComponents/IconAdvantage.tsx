import React from 'react';
import classnames from 'classnames';

type PropsType = {
  children?: React.ReactChild | React.ReactChildren,
  tooltipText?: string,
  className?: string,
  classNameTooltip?: string,
}

const IconAdvantage : React.FC < PropsType > = ({children, tooltipText, className, classNameTooltip}) => {
    
    return (
      <div
      className={classnames(className)}>
      <div className="complex-advantages__features-item-box">
        {children}
      </div>
      <span
          className="complex-advantages__features-hint complex-advantages__features-hint--sale">{tooltipText}</span>
      </div>
    )
}

export default React.memo(IconAdvantage);