//b) Calculator ==  pass 2 numbers as attribute 
//                         and display 

// 		addition , subtraction , division , multiplication 
// 	c) in point b  =  accept 1 more argument operation and then 
//                      display data for that operation only 

function Calculator(props){
    let n1 = parseFloat(props.num1);
    let n2 = parseFloat(props.num2);

    function add(){
        let sum = n1+n2;
        return (sum);
    }
    function sub(){
        let subtract = n1-n2;
        return (subtract);
    }
    function mul(){
        let multiply = n1*n2;
        return (multiply);
    }
    function div(){
        let divide = n1/n2;
        return (divide);
    }

    return (
        <div>
            <p>Addition: {add()}</p>
            <p>Subtraction: {sub()}</p>
            <p>Multiplication: {mul()}</p>
            <p>Division: {div()}</p>
        </div>
    );
}

export default Calculator;