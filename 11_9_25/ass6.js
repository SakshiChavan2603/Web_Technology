//6) Write a function to divide two numbers and assign function to a variable

function div(a,b){
    if(b==0){
        console.log("Denominator can't be zero\n")
    }
    return a/b;
}
let a=10, b=20;
console.log("Division of "+a+"/"+b+"="+div(a,b));