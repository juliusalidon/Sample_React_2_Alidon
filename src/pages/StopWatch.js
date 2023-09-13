import { useState, useRef } from "react";
const StopWatch = () => {
    const [count, setCount] = useState(0);
    const timerID = useRef();

    const startTime = () => {
        timerID.current = setInterval(
            () => {
                setCount(num => num + 1);
            }
            ,
            1000
        )
    }

    const stopTime = () => {
        clearInterval(timerID.current);
    }

    const resetTime = () => {
        setCount(0);
        stopTime();
    }

    return ( 
        <>
        <div className="container">
            <div className="card">
                <div className="card-body text-center">
                    <h1>{count}</h1>
                    <but className="btn btn-primary p-2 m-2" onClick={startTime}>Start</but>
                    <but className="btn btn-warning p-2 m-2" onClick={stopTime}>Stop</but>
                    <but className="btn btn-danger p-2 m-2" onClick={resetTime}>Reset</but>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default StopWatch;