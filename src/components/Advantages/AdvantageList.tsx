import React from 'react';
import classNames from 'classnames';

import IconAdvantage from './IconAdvantage';

import { advantages } from '../../assets/data';

type PropsType = {
    itemNames: Array<string>,
    classNameItem:string,
    classNameItemTooltip: string,
    classNameWrap?: string,
    classNameIconWrap?: string,
}

const AdvantageList : React.FC < PropsType > = ({itemNames, classNameItem, classNameItemTooltip, classNameWrap, classNameIconWrap}) => {
    const itemAdvantagesData = React.useMemo(() => advantages.filter((item) => itemNames.includes(item.name)), [itemNames]);
    
    return (
        <div className={classNames(classNameWrap)}>
            {itemAdvantagesData.map((item, i) => {
                return (
                    <IconAdvantage
                        key={i+"_iconAdvantage"}
                        tooltipText={item.desc}
                        className={ classNames(classNameItem, item.className, classNameItem+"--"+item.className)}
                        classNameTooltip={classNames(classNameItemTooltip, item.classNameHint, classNameItemTooltip + "--" + item.classNameHint)}
                    classNameIconWrap={classNameIconWrap}>
                        <item.icon/> 
                    </IconAdvantage>
                );
            })}
        </div>
            
    )
}

export default React.memo(AdvantageList);