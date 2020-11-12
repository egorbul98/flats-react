import React, { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { Placemark, Map, YMaps, Clusterer } from 'react-yandex-maps';
import mapPin from '../../assets/img/map_pin.png';
// import mapPin from '../../assets/img/map_pin.png';
import { AppStateType } from '../../redux/reducers/rootReducer';
import Loading from '../miniComponents/Loading';

let style: CSSProperties = {
  width: "100%",
  height: "100%"
}

type PropsTypes = {
  center: [number, number]
}

const MainMap:React.FC<PropsTypes> = ({center}) => {
  const { complexesItems, isLoading } = useSelector(({ complexes }: AppStateType) => {
    return {
      complexesItems: complexes.items,
      isLoading: complexes.isLoading
    }
  });
  
  return (
    
    <div className="main-map" style={style}>
      {isLoading ? <Loading styleWrap={{marginTop:"40%"} }/> :
        <YMaps preload={true}>
          <Map width={"100%"} height={"900px"} defaultState={{ center: center, zoom: 10 }} >
            <Clusterer
              options={{
                preset: 'islands#invertedVioletClusterIcons',
                groupByCoordinates: false,
              }}
            >
            {complexesItems.map((complex) => {
                return (
                  <Placemark key={ complex.id } geometry={[complex.coords[0], complex.coords[1]]}
                  options={{ iconLayout: 'default#image',
                    iconImageHref: mapPin,
                    iconImageSize: [79, 87],
                    iconImageOffset: [-40, -87],
                    center: [complex.coords[0], complex.coords[1]]}}
                />
                )
            })}
            </Clusterer>
          </Map>
      </YMaps>
      }
         
    </div>
  )
}

export default MainMap;