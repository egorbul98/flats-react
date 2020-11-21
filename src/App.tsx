import React from 'react';
import {Route} from 'react-router-dom';

import Catalog from './pages/Catalog/Catalog';
import './assets/scss/style.scss';
import './App.css';
import DetailsComplex from './pages/DetailsComplex';
function App() {
  
  return (
    <div className="App">
      
      <Route exact path={"/"} component={Catalog}/>
      <Route exact path={"/favorites"} component={Catalog}/>
      <Route exact path={"/complex/:id"} component={DetailsComplex}/>
      
    </div>
  );
}

export default App;
