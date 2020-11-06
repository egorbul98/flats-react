import React, { CSSProperties } from 'react';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import './assets/scss/style.scss';
import './App.css';
function App() {
  
  return (
    <div className="App">
      <Header />
      
      <Catalog/>
      
    </div>
  );
}

export default App;
