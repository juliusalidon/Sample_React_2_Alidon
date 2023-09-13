import { useEffect, useState } from "react";
const Timer = () => {
    const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);
    const [letter, setLetter] = useState();
    const [letter2, setLetter2] = useState();
    // useEffect(
    
    useEffect(
        () => 
        {
            setTimeout(
                () => {
                    setCount((count) => count + 1)
                }
                ,
                1000
            )}
        ,
        [letter]
    );

    return ( 
        <>
            <div className="countainer text-center">
                <div className="card">
                    <div className="card-body">
                        Normal Timer:
                        <h1>{count}</h1>
                        Typing Counter:
                        <br /><br />
                        <input type="text" value={letter} onChange={(e) => setLetter(e.target.value)}/>
                        <input type="text" value={letter2} onChange={(e) => setLetter2(e.target.value)}/>
                        {letter2}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Timer;