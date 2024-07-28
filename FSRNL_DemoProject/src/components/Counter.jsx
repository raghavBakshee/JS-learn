import { useState } from "react";
const Counter = ()=>{

    const [count, setCount] = useState(0);
    return (
        <>
        <h2> Counter Example</h2>
        <p> The state count value is {count}</p>
        <button onClick={()=> setCount(e=>e + 1)}> +++ </button>
        <button onClick={()=> setCount(e=>e - 1)}> - -  </button>
        <button onClick={()=> setCount(0)}> Reset </button>
        
        </>

    )
}
export default Counter;