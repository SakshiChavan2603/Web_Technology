//b) Calculator ==  pass 2 numbers as attribute 
//                         and display 

import { useState } from "react";

// 		addition , subtraction , division , multiplication 
// 	c) in point b  =  accept 1 more argument operation and then 
//                      display data for that operation only 
// in above assignments display output On Html Page 

// use state management 

function Calculator1({}){

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    return(
        <div>
            <input
            type="number"
            value={num1}
            onCh
    
            
            ></input>
        </div>
    );
}