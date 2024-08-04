import { useMemo, useState } from "react";

const Mymemo = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);
    const square=useMemo(()=> squareNumber(number),[number]);
    return (
        <>

            <h2> useMemo Example</h2>
            Enter number : <input type="number" onChange={(event) => setNumber(event.target.value)} /> <br />

            <p>Number : {number} square is {square}</p>
            <div>
                <button onClick={() => setCounter(counter + 1)}> Increment</button>
                <p>Counter : {counter}</p>
            </div>

        </>
    )
}
function squareNumber(n){
    return n*n;
}
export default Mymemo;