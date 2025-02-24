import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

    const reset = ()=>{
        setCount(0);
    }

    const increase = () => {
        setCount(prevCount => prevCount+1);
    }

    const decrease = () => {
        setCount(prevCount => prevCount-1);
    }

    return(
    <>
        <div className="container">
            <div className="dis-div">
                <h5 className="display">{count}</h5>
            </div>
            <div className="btns">
                <button className="increase" onClick={increase}>increase</button>
                <button className="reset" onClick={reset}>reset</button>
                <button className="decrease" onClick={decrease}>decrease</button>
            </div>
        </div>
    </>
    );
}

export default App
