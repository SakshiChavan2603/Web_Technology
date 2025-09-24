let s1 = Symbol();
console.log(s1);
const mySymbol = Symbol('id');

const user = {
  name: 'Sakshi',
  [mySymbol]: 12345  // Symbol used as key
};

console.log(user.name);       // Sakshi
console.log(user[mySymbol]);  // 12345

// Symbol keys don't show up in normal loops
for (let key in user) {
  console.log(key);  // only "name" will be printed
}

console.log(0.2 + 0.1)
let a = 10_00.0;
console.log(a);