const express = require('express');
const fs = require('fs');
const port = 3000;
const app = express();
const users1 = require('./MOCK_DATA.json');
const usersByEmail = require('./MOCK_DATA.json');
const usersByLastName = require('./MOCK_DATA.json');

const path = require('path');
const filePath = path.join(__dirname,'MOCK_DATA.json');

app.get('/',(req,res)=>{
    res.send("hello from everyone");
});

//get all data
app.get('/users1',(req,res)=>{
    res.json(users1);
});

//get specific id data
app.get('/users1/:id',(req,res)=>{
    console.log("users1");
    const id = Number(req.params.id);
    const user = users1.find(user=>user.id === id);
    return res.json(user);
});

//get specific data by id and email
app.get('/users1/:id/:email',(req,res)=>{
    const id = Number(req.params.id);
    const email = req.params.email;
    const user = users1.find(user=>user.id === id && user.email === email);
    return res.json(user);
})

//get data by email
app.get('/usersByEmail/:email',(req,res)=>{
    console.log("users email");
    const email = req.params.email;
    const user = usersByEmail.find(user=>user.email === email);
    return res.json(user);
})

app.get('/usersByLastName/:last_name',(req,res)=>{
    console.log("users last name");
    const last_name =req.params.last_name;
    const user = usersByLastName.find(user=>user.last_name === last_name);
    return res.json(user);
});

//delete by id
app.delete('/users/:id',(req,res)=>{
    console.log("delete by id")
    const id = Number(req.params.id);
    const userIndex = users1.findIndex(user=>user.id === id);
    
    if(userIndex == -1){
        return res.status(404).send("Data not found");
    }
    const deleteUser = users1.splice(userIndex,1);
    return res.json('deleted');

});


app.listen(port,()=>{
    console.log("Server started on http://localhost:3000")
});