// 3)   Try File Handling Write and Read data synchronous method 
//    and try asynchronous method 

const http = require('http');
const url = require('url');
const server = http.createServer((req,res)=>{
   let link = req.url;
   let data = url.parse(link,true).query;

   const file = require('fs');
   file.writeFile('Sample.txt',"Hello, Sakshi!!",(err)=>{
      console.log(err);
      res.end(err);
   });

   file.readFile('Sample.txt','utf8',(err,data)=>{
      if(err){
         console.log("Error Occured"+err);
         res.end(err);
      }else{
         console.log(data);
         res.end(data);
      }
   })

   //file.close('Sample.txt');
});

server.listen(8080,()=>{
   console.log("Server started on http://localhost:8080");
})