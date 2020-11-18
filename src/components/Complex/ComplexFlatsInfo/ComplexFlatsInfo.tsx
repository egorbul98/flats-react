import React, { useState } from 'react';
import classNames from 'classnames';

import { FlatsGroupByRoomsType, FlatType } from '../../../mainTypes';
import GroupFlatInfoItem from './GroupFlatInfoItem';
import FlatsList from './FlatsList';

type PropsTypes = {
  groupedFlats:Array<FlatsGroupByRoomsType>
  flats:Array<FlatType>
}

const ComplexFlatsInfo : React.FC < PropsTypes > = ({groupedFlats, flats}) => {

  const [activeFlat, setActiveFlat] = useState(flats[0].id);
  const [activeGroupFlats, setActiveGroupFlats] = useState<null | string>(null);
  const flatsItems = React.useMemo(() => flats.filter((item) => item.room === activeGroupFlats), [activeGroupFlats]);
  const [image, setImage] = useState<string | undefined>(flatsItems[0] ? flatsItems[0].img : undefined);

  const onClickGroupFlat = (room:string) => {
    setActiveGroupFlats(room === activeGroupFlats ? null : room);
  }
  
  const onClickFlat = (id: number, img: string) => {
    setActiveFlat(id);
    setImage(img)
  }
  
  React.useEffect(() => {
    if (flatsItems[0]) {
      setImage(flatsItems[0].img);
      setActiveFlat(flatsItems[0].id);
    }
   
  }, [activeGroupFlats]);

  return (
    <section className="flats" id="flats">
      <div className="flats__wrapper">

        <ul className="flats__list">
          {groupedFlats.map((item, index) => {
            return <GroupFlatInfoItem key={index + "_flats_"+item.room} item={item} active={item.room === activeGroupFlats} onClick={onClickGroupFlat}/>;
          })}
        </ul>
      
        <div className={classNames("flats-box", {"active":activeGroupFlats!==null})}>
          
          <div className="flats-box-left">
             <div className="flats-box-head">
               <div className="flats-box-head__item icon"></div>
               <div className="flats-box-head__item square">Площадь, м2</div>
               <div className="flats-box-head__item floor">Этаж</div>
               <div className="flats-box-head__item type">Тип отделки</div>
               <div className="flats-box-head__item cost">Стоимость</div>
             </div>
 
           <FlatsList flats={flatsItems} onClickFlat={onClickFlat} idActiveFlat={ activeFlat}/>
           
          </div>
          <div className="flats-box-right">
             <div className="flats-box-head">
               <div className="flats-box-head__item plan">Планировка</div>
             </div>
             <div className="flats-box-img">
               <img src={image} alt=""/>
             </div>
          </div>
       </div>
 
      </div>

      
     
        
    </section>

    )
}

export default React.memo(ComplexFlatsInfo);

   