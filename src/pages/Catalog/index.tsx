import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Favorites from './Favorites';
import Header from '../../components/Header';
import CatalogContent from './CatalogContent';
import SearchContent  from './SearchContent';


const Catalog = () => {
  
  return (
    <>
      <Header />
      <div className="body-catalog">
        <Switch>
          <Route path="/" exact component={CatalogContent} />
          <Route path="/favorites"  component={Favorites} />
          <Route path="/search"  component={SearchContent} />
        </Switch>
      </div>
    </>
  )
}


export default Catalog;