import React, { CSSProperties } from 'react';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import './assets/scss/style.scss';
function App() {
  
  return (
    <div className="App">
      <Header />
      
      <Catalog/>
      
    </div>
  );
}

export default App;
