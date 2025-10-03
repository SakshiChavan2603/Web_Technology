import { useCallback, useEffect, useState } from "react";

const PasswordGenerator = ()=>{

    const [password,setPassword] = useState('');
    const [length,setLength] = useState(12);
    const  [allowSymbol,setAlloSymbol] = useState(false);
    const [allowNumber, setAllowNumber] = useState(false);

    const generatePass = ()=>{
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(allowNumber){
            characters+='1234567890';
        }
        if(allowSymbol){
            characters+='~!@#$%^&*()'
        }

        let newPass = '';
        for(let i=1;i<=length;i++){
            let index = Math.floor(Math.random()*characters.length)
            newPass += characters.charAt(index);
        }
        setPassword(newPass);
    };

    //useEffect(()=>{generatePass()},[]); // display only when page load
    //useEffect(()=>{generatePass()}); // infine loop
    useEffect(()=>{generatePass()},[length,allowNumber,allowSymbol]);

    useCallback(()=>{generatePass()},[length,allowNumber,allowSymbol])

    return(
        <>
            Length: <input 
            type="number" 
            value={length}
            onChange={(e)=>setLength(parseInt(e.target.value))}
            min={1}
            max={32}
            ></input><br></br><br></br>

            <label>Choose option</label><br></br><br></br>
            <input 
            type="checkbox" 
            checked={allowSymbol}
            onChange={(e)=>setAlloSymbol(!allowSymbol)}
            ></input>
            <label>Allow Special Character</label><br></br><br></br>

            <input 
            type="checkbox"
            checked={allowNumber}
            onChange={(e)=>setAllowNumber(!allowNumber)}
            ></input>
            <label>Allow Numbers</label><br></br><br></br> 

            <button onClick={generatePass}>Generate Password</button>

            <input type="text" value={password} readOnly></input>           

        </>
    );
}

export default PasswordGenerator;