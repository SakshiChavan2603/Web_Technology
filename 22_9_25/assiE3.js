// <!-- 3)   accept command line args input from user 
//  between 1 -  5 
//  if input is valid then display * pattern output 
 
//  if input is 3 then display
//  * * *
//  * *
//  *
//   if number is not other that 1 to 5 then throw the error 
//   and display error message 
//    -->
const http = require('http');

function pattern(num) {
  let output = '';
  for (let i = 0; i < num; i++) {
    let line = '';
    for (let j = num; j > i; j--) {
      line += '* ';
    }
    output += line+'\n';
  }
  return output;
}



const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});

    let a = Number(process.argv[2]);

    new Promise((resolve,reject)=>{
        if(a>=1 && a<=5){
             resolve(a);
        }else{           
            reject("Number must be between 1 to 5");
        }
    })
    .then(result=>{
        let output = pattern(result);
        res.end(output);
    })
    .catch(error=>{
        res.end(error);
    });
});

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});