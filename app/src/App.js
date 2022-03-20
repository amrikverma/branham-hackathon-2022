import './App.css';
import {useState, useEffect} from 'react'
import { Navbar } from './Navbar.js'

function App() {
  const [counter, SetVariable] = useState(0);
  useEffect(function test() {
    console.log("The counter is: " + counter);
  }, [counter]);

  function doOnClick() {
    SetVariable(counter + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={doOnClick}> Click me </button>
      {/* <Navbar/> */}
    </div>
  )
}

export default App;

