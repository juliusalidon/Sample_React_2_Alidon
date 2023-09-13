import { useState, useRef } from "react";

const UseRefTimer = () => {
    let [counter, setCounter] = useState(0);
    let stateCounter = () => {
        setCounter(counter + 1);
    }
    let num = 0
    let count = useRef(num);
    let refCounter = () => {
        count.current++;
        console.log(count.current);
    }

    const element = useRef();

    const selectingElement = () => {
        // console.log(element.current.value);
        // console.log(element.current);
        element.current.focus();
    }

    return ( 
        <>
            <h1>Counter using State</h1>
            <p>{counter}</p>
            <button className="btn btn-primary" onClick={stateCounter}>Click Me!</button>


            <h1>Counter using Ref</h1>
            <p>{count.current}</p>
            <button className="btn btn-danger" onClick={refCounter}>Click Me!</button>

            <input type="text" ref={element}/>
            <button className="btn btn-warning" onClick={selectingElement}>CLick Me!</button>
        </>
     );
}
 
export default UseRefTimer;