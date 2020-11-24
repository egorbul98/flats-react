import React from 'react';
import ComplexesList from '../../components/CatalogComplexes/ComplexesList';
import SearchComplexesBlock from '../../components/SearchComplexesBlock';

console.log("asdsad");

const SearchContent = () => {
 console.log("asdasd");
 
  return (
    <>
        <SearchComplexesBlock/>
        <ComplexesList/>
     </>
  )
}


export default React.memo(SearchContent);