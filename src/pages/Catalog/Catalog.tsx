import React from 'react';
import {Route} from 'react-router-dom';

import Favorites from './Favorites';
import Header from '../../components/Header';
import CatalogContent from './CatalogContent';


const Catalog = () => {
  
  return (
    <>
      <Header />
      <div className="body-catalog">
        
        <Route path="/favorites" component={Favorites} />
        <Route path="/" exact component={CatalogContent} />
        
        
  
      </div>
    </>
  )
}


export default Catalog;