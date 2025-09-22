
//2) Write a Program to use Different Array Library Functions using switch case

let input = "push()";

let a = [1,2,3,4,5];

// a.push(6);
// console.log("Array After the push(element)\n"+a);

// a.pop();
// console.log("Array After the pop()\n"+a);

// a.shift();
// console.log("Array After the shift()\n"+a);

// a.unshift(10);
// console.log("Array After the unshift(element)\n"+a);

// console.log("Length of the Array\n"+a.length);

let choice = 6;
switch(choice){
    case 1:
        a.push(6);
        console.log("Array After the push(element)\n"+a);
        break;
    case 2:
        a.pop();
        console.log("Array After the pop()\n"+a);
        break;
    case 3:
        a.shift();
        console.log("Array After the shift()\n"+a);
        break;
    case 4:
        a.unshift(10);
        console.log("Array After the unshift(element)\n"+a);
        break;
    case 5:
        console.log("Length of the Array\n"+a.length);
        break;
    case 6:
        console.log("Array after splice "+a.splice(2));
        break;
    default:
        console.log("Invalid Choice");
}
