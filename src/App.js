import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './sharable/header/header';
import BodyComponent from './sharable/body/body';
import FooterComponent from './sharable/footer/footer';



function App() {
  return (
    <div className="App">

            <HeaderComponent/>
            <BodyComponent/>
    </div>
  );
}

export default App;
