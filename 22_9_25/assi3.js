// 3) Write a recursive function in Node.js to print factorial of number 

// number accept by command line Args


const http = require('http');

function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }
    return num*factorial(num-1);
}

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    let a = process.argv[2];
    let  fact = factorial(a);
    res.end(`<p>factorial of ${a} is ${fact}</p>`);
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});