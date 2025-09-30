import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(prevCount=>prevCount+1);
    } 

    const decrement = ()=>{
        if(count>0){
            setCount(prevCount=>prevCount-1);
        }
    }

    const reset = ()=>{
        setCount(0);
    }

    return(
        <>
            Count: {count}

            <button onClick={decrement}
            disabled = {count == 0}>Decrement
            </button><br></br>

            <button onClick={increment}>Increment</button><br></br>

            <button onClick={reset}>Reset</button><br></br>

            
        </>


    );
}