import { useEffect, useState } from "react";

export default function CounterUseEffect(){
    const [count, setCount] = useState(0);
    const [table, setTable] = useState([]);

    useEffect(()=>{
        const newTable = []

        for(let i=1;i<=10;i++){
            newTable.push(
                <p key={i} style={{ margin: '5px 0', fontSize: '1.2em' }}>
                    {count} * {i} = <b style={{ color: '#007f00' }}> {count*i} </b>
                </p>
            )
        }
        setTable(newTable);
    },[count]);

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

            <button onClick={reset}>Reset</button><br></br><br></br>

            {/* <p>Multiplication table for {count}</p><br></br> */}
            {/* {table} */}

            <div style={{ flex: 1, textAlign: 'center' }}>
                <h3>Multiplication Table for {count}</h3>
                <div style={{ textAlign: 'left', margin: '0 auto', width: 'fit-content' }}>
                    {/* Display the table generated and stored in state */}
                    {table}
                </div>
            </div>
        </>
    );
}