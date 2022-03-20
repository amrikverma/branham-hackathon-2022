import { useState } from 'react';
import './App.css';

const Calculator = () => {
    const [a, setA]=useState(0);
    const [b, setB]=useState(0);
    const [c, setC]=useState(0);
    const[area, setArea]=useState(0);

    function getBase1(val){
        setA(val.target.value);
        setArea(((a+b)* c)/2);
        if(area>0){
            console.log(area);

        }
    }

    function getBase2(val){
        setB(val.target.value);
        setArea(((a+b)* c)/2);

        if(area>0){
            console.log(area);
        }
    }

    function getHeight(val){
        setC(val.target.value);
        setArea(((a+b)* c)/2);

        if(area>0){
            console.log(area);
        }
    }


    return (
        <div>
            <header className ="calculatorcolor" style={{color: "padding: 128px 16px"}}>
                <h1 style={{color: "white"}}>Calculator</h1>
            </header>

            <div>
                <h3>a</h3>
                <input type="text" onChange={getBase1}>Enter base</input>
                <input type="text" onChange={getBase2}>Enter base</input>
                <input type="text" onChange={getHeight}>Enter height</input>
            </div>

        </div>
    )
}

  export default Calculator;