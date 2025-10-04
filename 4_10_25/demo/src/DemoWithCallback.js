import { useCallback, useState } from "react";

const functionSet = new Set();

export default function WithCallback(){
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const incrementCount = useCallback(()=>
        setCount(count+1),[count]
    )

    const decrementCount = useCallback(()=>
        setCount(count-1),[count]
    )

    //const incrementNum = useCallback(()=> setNum(num+1),[num]); // it create function again and angain on every render
    //const incrementNum = useCallback(()=> setNum(num+1),[]); // it will create function only one time but you can increment 1 time only
    const incrementNum = useCallback(()=> setNum((prevnum)=>prevnum+1),[]);  // it will create function only one time and stored in the cache memory and prev use it from the cache memory



    functionSet.add(incrementCount);
    functionSet.add(decrementCount);
    functionSet.add(incrementNum);

    return(
        <>
        <h2>Demo with useCallback()</h2>
        <p>Size of set: {functionSet.size} </p><br></br>
        <p>Count: {count} </p><br></br>
        <p>Num: {num} </p><br></br>

        <button onClick={incrementCount}>Increment counter</button>
        <button onClick={decrementCount}>Decrement counter</button>
        <button onClick={incrementNum}>Increment number</button>
        </>
    );
};