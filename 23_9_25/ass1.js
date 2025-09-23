// 1) in http server pass data as query parameter 
//   and use that data to display on HTML Page 
//   fName=ABC&lName=XYZ

// 	o/p Hello <fName>

const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    let data = req.url;
    let data1 = url.parse(data,true).query
    res.writeHead(200,{'Content-Type':'text/html'});
    if(data1.fName == "Sakshi"){
        res.write("<h1>"+ "Hello "+ data1.fName + "</h1>");
    }else{
        res.write(JSON.stringify({message:"Hello"}));
    }
    //res.write("Hello");
    res.end();
});

server.listen(8080);


