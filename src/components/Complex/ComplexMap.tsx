import React from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import mapPin from '../../assets/img/map_pin.png';
type PropsTypes = {
  coords: [number, number],
}

const ComplexMap : React.FC < PropsTypes > = ({coords}) => {

  return (
    <YMaps preload={true} width={"100%"} height={"100%"}>
      <Map width={"100%"} height={"100%"} defaultState={{ center: coords, zoom: 10 }} >
          <Placemark
              geometry={[coords[0], coords[1]]} 
              options={{
                iconLayout: 'default#image',
                iconImageHref: mapPin,
                iconImageSize: [79, 87],
                iconImageOffset: [-40, -87],
                placemarkClick: false,
                center: [coords[0], coords[1]]
          }}/>
      </Map>
    </YMaps> 
    )
}

export default React.memo(ComplexMap);

   