import './App.css';
import React from 'react';
import {Productlist,Header} from './components';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Productlist/>
    </React.Fragment>
  );
}

export default App;
