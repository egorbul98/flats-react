import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "../../redux/actions/filterActions";
import { AppStateType } from "../../redux/reducers/rootReducer";

export const useSwitchRegion = () => { //логика для переключения региона
  const dispatch = useDispatch();

  const { region } = useSelector(({ filter }: AppStateType) => { return { region: filter.region } })
  
  const onHandleClick = useCallback((newRegion: string) => {
      region !== newRegion && dispatch(setRegion(newRegion));
  }, [dispatch, region]);
  
  return [region, onHandleClick] as const
}