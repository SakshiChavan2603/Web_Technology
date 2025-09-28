// 1) Create Function Component  with parameters
//      	 a) Factorial ==  pass number as parameter  
// in above assignments display output On Html Page
// use state management  

import { useState } from "react";

function Factorial({number}){

    const [inputNumber, setInputNumber] = useState(number || '');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (e)=>{
        let value = e.target.value;
        setInputNumber(value);
        if(value === ''){
            setResult('');
            setError('');
        }else{
            calculateFact(parseInt(value));
        }
    }

    const calculateFact = (num)=>{
        if(isNaN(num) || num<0){
            setResult(null);
            setError("Please Enter the non-negative number");
            return;
        }

        if(num===0 || num===1){
            setResult(1);
            setError('');
            return;
        }
        let fact = 1;
        for(let i=2;i<=num;i++){
            fact = fact*i
        }
        setResult(fact);
        setError('');
    }

    return(
        <div>
            Enter Number: <input
                            type="number"
                            id="num"
                            value={inputNumber}
                            onChange={handleInputChange}
                            placeholder="Enetr the number"
                            >
                            </input>

            <p>Error: {error}</p>

            <p>Factorial of {inputNumber} is {result} </p>
        </div>
    );
}

export default Factorial