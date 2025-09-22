// 4) Write a Node program that prints all the numbers between 1 and 100, each on a separate line.
// A few caveats:
// o if the number is divisible by 3, print "foo"
// o if the number is divisible by 5, print "bar"
// o if the number is divisible by both 3 and 5, print "foobar"

const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    let output = '';
    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            output += `${i} foobar<br>`;
        }else if(i%3==0){
            output += `${i} foo<br>`;
        }else if(i%5==0){
            output += `${i} bar<br>`;
        }
    }
    res.end(output);
});

const PORT = 8080;
server.listen(PORT, ()=>{
    console.log(`Server runnig at http://localhost:${PORT}`);
})