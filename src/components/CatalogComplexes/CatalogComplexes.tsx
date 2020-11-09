import React, { useCallback } from 'react';
import SortBox from '../SortBox/SortBox';
import ComplexesList from './ComplexesList';
type PropsTypes = {}

const CatalogComplexes : React.FC < PropsTypes > = () => {

  const [displayItems, setDisplayItems] = React.useState("Плиткой");

  const onClickDisplayButton = useCallback((titleBtn: string) => {
    setDisplayItems(titleBtn);
  }, [setDisplayItems])

  return (
    <>
      <SortBox onClickDisplayButton={onClickDisplayButton} />
      <ComplexesList displayItems={displayItems }/>
    </>
    )
}

export default React.memo(CatalogComplexes);