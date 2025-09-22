//7) To Find max number from array write code in 3 ways as shown in lecture 

let a = [0,5,40,2,90];

console.log("USing Simple for loop");
let max = a[0];
for(let i=1;i<a.length;i++){
    if(max<a[i]){
        max = a[i];
    }
}
console.log("MAximum no is "+ max+"\n");

let b = [0,5,40,2,90];
max = b[0];
console.log("USing forEach");
b.forEach(element=>{
    if(element>max){
        max = element;
    }
});
console.log("MAximum no is "+ max+"\n");

let c = [0,5,40,2,90];
console.log("USing sort(ascending)");
c.sort((a,b)=>a-b); 
console.log(c);
console.log("max is "+c[c.length-1]+"\n");

console.log("USing sort(descending)");
c.sort((a,b)=>b-a);
console.log(c);
console.log("max is "+c[0]);
