import { useEffect, useRef, useState } from "react";

export default function UseRef(){
    let x = useRef();
    let y = useRef();
    let z = 100;

    const [s1, setS1] = useState();
    const [inputValue, setInputValue] = useState();

    useEffect(()=>{
        x.current= 100;
    },[])

    return (
        <>
            <input type="text" onChange={(e)=>{
                x.current++;
                z++;
                setS1(e.target.value);
            }}></input>

            <p>
                x={x.current}
                z= {z}
            </p>

            <input type="text" ref={y} onChange={(e)=>
                {console.log("heere",y.current.value )
                    setInputValue(e.target.value);
                }} />
            <p>The value in input tag = {inputValue} </p>
        </>
    )
}