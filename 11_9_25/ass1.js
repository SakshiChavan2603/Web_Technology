/*1) Write a function getFactorialImpl ( choice="FORLOOP" ) ----it could be 
    FORLOOP or RECUR
	Function Fact2(n1)
	Use recursion and print the factorial
	If the choice is FORLOOP return Fact1
	If the choice is RECUR then return Fact2
	Outside --- call let rv = getFactorialImpl("RECUR")
	rv(3)
	Rv = getFactorialImpl()
	rv(5)*/

      
function getFactorial1(n){
    if(n==0){
        return 0;
    }

    if(n==1){
        return 1;
    }

    return n*getFactorial1(n-1);
}


function getFactorial2(n){
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    console.log("Factorial of "+a+" is "+fact)
}

let choice = "FORLOOP";
choice = "Recursive";
let a = 5;
switch(choice){
    case "FORLOOP":
        getFactorial2(a);
        break;
    case "Recursive":
        let fact = getFactorial1(a);
        console.log("Factorial of "+a+" is "+fact);


}

