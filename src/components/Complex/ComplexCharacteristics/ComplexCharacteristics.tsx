import React from 'react';
import {CharacteristicType} from '../../../mainTypes';
import ItemCharacteristic from './ItemCharacteristic';
type PropsTypes = {
  items:Array<CharacteristicType>
}

const ComplexCharacteristics : React.FC < PropsTypes > = ({items}) => {

  return (
    <section className="description" id="description">
    <div className="description__wrapper">
      <h2 className="description__title">Характеристики комплекса</h2>
      <div className="description__table-wrapper">
        {items.map((item, i) => <ItemCharacteristic key={ i + "_caharacteristic"} item={item}/>)}
       </div>
    </div>
  </section>

    )
}

export default React.memo(ComplexCharacteristics);

   