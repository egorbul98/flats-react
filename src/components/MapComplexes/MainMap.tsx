import React, { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { Placemark, Map, YMaps, Clusterer} from 'react-yandex-maps';
import mapPin from '../../assets/img/map_pin.png';
import iconPlacemark from '../../assets/img/placemark.svg';
// import mapPin from '../../assets/img/map_pin.png';
import { AppStateType } from '../../redux/reducers/rootReducer';
import Loading from '../miniComponents/Loading';

let style: CSSProperties = {
  width: "100%",
  height: "100%"
}

type PropsTypes = {
  center: [number, number],
  onClickPlacemark?: (idComplex: number)=>void
}

const MainMap:React.FC<PropsTypes> = ({center, onClickPlacemark}) => {
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
                groupByCoordinates: false,
                preset: 'islands#invertedRedClusterIcons',
                clusterHideIconOnBalloonOpen: false,
                geoObjectHideIconOnBalloonOpen: false,
                hasBalloon: true,
              }}

            >
           
            {complexesItems.map((complex) => {
                return (
                  <Placemark
                    key={complex.id}
                    geometry={[complex.coords[0], complex.coords[1]]} 
                    options={{
                      iconLayout: 'default#image',
                    iconImageHref: iconPlacemark,
                    iconImageSize: [23, 23],
                    iconImageOffset: [-10, 0],
                    placemarkClick: false,
                    center: [complex.coords[0], complex.coords[1]],
                    clusterCaption: 'Geo object №2',
                    balloonContent: () => <span>item.name</span>
                  }}
                    onClick={()=>onClickPlacemark&&onClickPlacemark(complex.id)}
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

export default React.memo(MainMap);