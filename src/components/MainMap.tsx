import React, { CSSProperties } from 'react';
import { Placemark, Map, YMaps } from 'react-yandex-maps';
import mapPin from '../assets/img/map_pin.png';

let style: CSSProperties = {
  margin: "20px auto",
  width: "80%",
}

type PropsTypes = {

}

const MainMap:React.FC<PropsTypes> = ({}) => {
  
  return (
    <div className="map-block">
      <h2>ЯНДЕКС КАРТА</h2>
         <img src={mapPin} alt=""/>
        <div style={style}>
          <YMaps >
            <div>My awesome application with maps!</div>
           
            <Map width={"100%"} height="720px"
              defaultState={{ center: [59.996421, 30.214709], zoom: 14 }} >
              
              <Placemark geometry={[59.996421, 30.214709]}
                options={{ iconLayout: 'default#image',
                  iconImageHref: mapPin,
                  iconImageSize: [79, 87],
                  iconImageOffset: [-40, -87],
                  center: [59.996421, 30.214709]}}
              >
  
              </Placemark>
  
            </Map>
          </YMaps>
        </div>
    </div>
  )
}

export default MainMap;