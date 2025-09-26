const express = require('express');
const hbs = require('hbs');
const app = express();

const port = 8080;

app.set('views','./views');
app.set('view engine','hbs');

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    // validate   user pass 
    req.customData = "from use";
    //req.set('data', "from use");  // add data in req 
    next()  /// pass the control to next method 
})

app.get("/about", (req, res) => {
    console.log('about');
    if (req.customData) {
    } else {
    }  //  Reading Data 
    res.render("aboutus")//<>.hbs
})

app.get('/Calc',(req,res)=>{
    res.render('calc.hbs');
});

app.use(express.urlencoded({extended:true}));

app.post('/docalculation',(req,res)=>{
    const n1 = parseInt(req.body.num1);
    const n2 = parseInt(req.body.num2);
    const sum = n1+n2;
    res.render('calc.hbs',{result:sum});
})

app.listen(port,()=>{
    console.log("Server started on http://localhost:8080")
});
