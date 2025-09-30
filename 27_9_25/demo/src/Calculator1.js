//b) Calculator ==  pass 2 numbers as attribute 
//                         and display 

import { useState } from "react";

// 		addition , subtraction , division , multiplication 
// 	c) in point b  =  accept 1 more argument operation and then 
//                      display data for that operation only 
// in above assignments display output On Html Page 

// use state management 

function Calculator1(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [op,setOperator] = useState();

    const [result, setResult] = useState(null);

    const performCalculation = (n1,n2,newop)=>{
        const val1 = parseFloat(n1);
        const val2 = parseFloat(n2);
        switch(newop){
            case '+':
                console.log(n1+n2);
                return val1+val2;
            case '-':
                return val1-val2;
            case '*':
                return val1*val2;
            case '/':
                if(val2==0){
                    return "Cannot divided by zero"
                }
                return val1/val2;
            default:
                return "Invalid Operator"
        }

    }
    
    const updateResult=(n1,n2,op)=>{
        const newResult = performCalculation(n1,n2,op);
        setResult(newResult);
    }

    const handleInputChange = (inputName, e)=>{
        let value = e.target.value;
        let newn1=num1;
        let newn2=num2;
        if(inputName === "num1"){
            setNum1(value);
            newn1 = value;
        }else{
            setNum2(value);
            newn2 = value;
        }
        updateResult(newn1,newn2,op);
    };

    const handleOperatorChange = (e)=>{
        const newop =e.target.value;
        // console.log(newop);
        setOperator(newop);
        updateResult(num1,num2,newop);
    }

    return(
        <>
            First number:<input
                        type="number"
                        value={num1}
                        onChange={(e)=>handleInputChange("num1",e)}  
                        placeholder="Enter the first number"
                        >
                        </input><br></br><br></br>

            
            Second number:<input
                        type="number"
                        value={num2}
                        onChange={(e)=>handleInputChange("num2",e)}
                        placeholder="Enter the second number"
                        >
                        </input><br></br><br></br>

            <select value={op} onChange={handleOperatorChange}>
                <option value="+">Add</option>
                <option value="-">Subtract</option>
                <option value="*">Multiply</option>
                <option value="/">Division</option>
            </select><br></br><br></br>

            Calcultaion: {num1} {op} {num2}<br></br><br></br>
            Result: {result}


        </>
    )

}

export default Calculator1