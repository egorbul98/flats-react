import React, { useCallback } from 'react';
import SortBox from '../SortBox/SortBox';
import ComplexesList from './ComplexesList';
type PropsTypes = {
  onOpenMap?: () => void
}

const CatalogComplexes : React.FC < PropsTypes > = ({onOpenMap}) => {

  const [displayItems, setDisplayItems] = React.useState("Плиткой");//Списком либо Плиткой

  React.useEffect(() => {
    window.addEventListener('resize', resizeWindow, true);
    return window.removeEventListener('resize', resizeWindow);
  }, []);

  let isTimeout = false;
  function resizeWindow(e: any) {
    if (!isTimeout) {
      isTimeout = true;
      const id = setTimeout(() => {
        isTimeout = false;
        clearInterval(id);
        if (window.innerWidth <= 768) {
          setDisplayItems("Плиткой");
        }
      }, 300);
    }
  }

  const onClickDisplayButton = useCallback((titleBtn: string) => {
    setDisplayItems(titleBtn);
  }, [setDisplayItems])

  return (
    <>
      <SortBox activeItemDisplayBtn={ displayItems } onClickDisplayButton={onClickDisplayButton} onOpenMap={onOpenMap} />
      <ComplexesList displayItems={displayItems }/>
    </>
    )
}

export default React.memo(CatalogComplexes);