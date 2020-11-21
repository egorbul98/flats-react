import React from 'react';
import classNames from 'classnames';
import { CharacteristicType } from '../../../mainTypes';
type PropsTypes = {
  item: CharacteristicType
}
const ItemCharacteristic: React.FC<PropsTypes> = ({ item }) => {
  const [active, setActive] = React.useState(false);

  const onToggleActive = () => {
    setActive(!active);
  }

  return (
    <table className={ classNames("description__table table", {"active": active})}onClick={onToggleActive} >
    <tbody>
      <tr >
          <th className="table__title table-house">{item.title}</th>
      </tr>
      {item.items.map((row, i) => {
        return (
          <tr key={i+"_ctr"}>
            <td className="table__data">{row.title}</td>
            <td className="table__conclusion">{row.value}</td>
          </tr>
        )
      })}
    </tbody>
  </table>

  );
}

export default React.memo(ItemCharacteristic);
