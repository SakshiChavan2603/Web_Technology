import { useState } from "react";

const functionSet = new Set();

export default function WithoutCallback(){
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const incrementCount = ()=>{
        setCount(count+1);
    }

    const decrementCount = ()=>{
        setCount(count-1);
    }

    const incrementNum = ()=>{
        setNum(num+1);
    }

    functionSet.add(incrementCount);
    functionSet.add(decrementCount);
    functionSet.add(incrementNum);

    return(
        <>
        <h2>Demo without useCallback()</h2>
        <p>Size of set: {functionSet.size} </p><br></br>
        <p>Count: {count} </p><br></br>
        <p>Num: {num} </p><br></br>

        <button onClick={incrementCount}>Increment counter</button>
        <button onClick={decrementCount}>Decrement counter</button>
        <button onClick={incrementNum}>Increment number</button>
        </>
    );
}