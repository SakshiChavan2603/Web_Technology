const express = require('express');
const port = 8080;
const app = express();
const users1 = require('./MOCK_DATA.json');
const f = require('fs');

const path = require('path');
const filePath = path.join(__dirname,'MOCK_DATA.json');

app.get('/',(req,res)=>{
    res.send("hello from everyone");
});

//get all data
app.get('/users1',(req,res)=>{
    res.json(users1);
});

//to store data 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/adduser',(req,res)=>{
    const data = req.body;
    console.log("data"+data.email);
    users1.push({id:users1.length+1, ...data});
    f.writeFile('./MOCK_DATA.json',JSON.stringify(users1),(err)=>{
        console.log(err);
    });
    return res.json("data added");
});

app.put('/updateUser/:id',(req,res)=>{
    const id =Number(req.params.id);
    const userIndex = users1.findIndex(user=>user.id===id);
     const data = req.body;

    if(userIndex === -1){
        res.status(404).send("Data not found");
    }else{
        users1[userIndex] = {...users1[userIndex], ...data};

        f.writeFile('./MOCK_DATA.json',JSON.stringify(users1),(err)=>{
            if(err){
                console.log(err);
                return res.status(500).send("Error writing data");
            }
            return res.status(200).json("data updated");
        });
        
    }

});

app.get('/aboutus',(req,res)=>{
    const filePath = path.join(__dirname, 'aboutUS.html');
    res.sendFile(filePath);
});

app.listen(port,()=>{
    console.log("Server started on http://localhost:8080")
});