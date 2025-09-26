// 1) Create Function Component  with parameters
//      	 a) Factorial ==  pass number as parameter 
//                   b) Calculator ==  pass 2 numbers as attribute 
//                         and display 

// 		addition , subtraction , division , multiplication 
// 	c) in point b  =  accept 1 more argument operation and then 
//                      display data for that operation only 


function Factorial(props){
    let n1 = parseInt(props.num1);
    let fact=1;
    for(let i=1;i<=n1;i++){
        fact = fact*i;
    }
    return (
        <h1> factorial : {fact}</h1>
    );
}

export default Factorial;