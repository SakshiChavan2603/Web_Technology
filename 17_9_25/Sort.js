let a=[10,5,40,8,1];

a.sort((n1,n2)=>{
    return (n2-n1);
});
console.log(a);

var arr2 = [{fname:'supriya',age:20,marks:88},
{fname:'trisha',age:22,marks:82},
{fname:'swami',age:19,marks:78},
{fname:'shravan',age:23,marks:66}]

console.log("before sorting ",arr2)
arr2.sort((s1,s2)=>{
    if(s1.marks < s2.marks) return 1;
    if(s1.marks > s2.marks) return -1;
    else return 0;
    
})
console.log("after sorting ",arr2) 

console.log("before sorting ",arr2)
arr2.sort((s1,s2)=>{
    if(s1.fname > s2.fname) return 1;
    if(s1.fname < s2.fname) return -1;
    else return 0;
    
})
console.log("after sorting ",arr2) 