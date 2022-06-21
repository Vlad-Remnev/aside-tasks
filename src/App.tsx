import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import Button from "./components/Button/Button";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs', price: 500},
    {manufacturer: 'Mercedes', model: 'e63s', price: 2000},
    {manufacturer: 'Audi', model: 'rs6', price: 1500}
]

function App() {

    const btn1Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }

    const btn2Foo = (sub: string) => {
        console.log(sub)
    }

    const btn3Foo = () => {
        console.log("I'm Stupid Btn")
    }
    return (
        <>
            <Header title={'NEW PAGE - Header'}/>
            <Main title={'NEW PAGE - Main'} topCars={topCars}/>
            <Footer title={'NEW PAGE - Footer'}/>
            <Button name={'YouTube - 1'} callBack={() => btn1Foo("i'm Ivan", 30)}/>
            <Button name={'YouTube - 2'} callBack={() => btn2Foo("I'm Stas")}/>
            <Button name={"I'm Stupid Btn"} callBack={btn3Foo}/>
        </>
    );
}

export default App;
