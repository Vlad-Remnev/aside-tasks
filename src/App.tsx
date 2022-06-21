import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";

const topCars = [
    {manufacturer:'BMW', model:'m5cs', price: 500},
    {manufacturer:'Mercedes', model:'e63s', price: 2000},
    {manufacturer:'Audi', model:'rs6', price: 1500}
]

function App() {
  return (
    <>
      <Header title = {'NEW PAGE - Header'}/>
      <Main title = {'NEW PAGE - Main'} topCars={topCars}/>
      <Footer title = {'NEW PAGE - Footer'}/>
    </>
  );
}

export default App;
