//b) Calculator ==  pass 2 numbers as attribute 
//                         and display 

// 		addition , subtraction , division , multiplication 
// 	c) in point b  =  accept 1 more argument operation and then 
//                      display data for that operation only 

function Calculator1(props){
    let n1 = parseFloat(props.num1);
    let n2 = parseFloat(props.num2);
    let operation = props.op;
    console.log(operation);

    let result = null;
    let operationName = '';

    if(operation === "addd"){
        operationName = "Addition"
        result = n1+n2;

    }else if(operation === "subb"){
        operationName = "Subtract"
        result = n1-n2;
    }else if(operation === "mull"){
        operationName = "Multiply"
        result = n1*n2;
    }else if(operation === "divv"){
        operationName = "Division"
        result = n1/n2;
    }else{
        result = "operation not specified";
    }

    return (
        <div>
            <p>{operationName}: {result}</p>
            
        </div>
    );
}

export default Calculator1;