// 4)Accept 10 munbers  from Command Line Args and store in array 
//   then display 
//   1) addition of even numbers only 
//   2) addition of even index numbers
//   3) addition of prime numbers 

const http = require('http');

function isPrime(num) {
    if (num <= 1) return false;
    for (let k = 2; k <= Math.sqrt(num); k++) {
        if (num % k === 0) return false;
    }
    return true;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'})
    let arr = [];
    for(let i=2;i<12;i++){
        arr.push(Number(process.argv[i]));
    }
    
    let even_sum =0;
    let even_Index_sum =0;
    let prime_sum = 0;

    for(let i =0;i<arr.length;i++){  
        if(arr[i]%2==0){
            even_sum+=arr[i];
        }
        
        if(i%2==0){
            even_Index_sum+=arr[i];
        }
        
        if(isPrime(arr[i])){
            prime_sum+=arr[i];
        }
    }
    let output = ` 
                Array = ${arr}
                1)addition of even numbers only ${even_sum} \n 
                2) addition of even index numbers ${even_Index_sum} \n
                3) addition of prime numbers  ${prime_sum} \n`
    res.end(output);
});

const port = 8080;
server.listen(port, () =>
    console.log('Server running on http://localhost:8080')
);