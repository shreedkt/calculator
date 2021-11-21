const express = require("express");
const bodyParser = require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({extended:true}));


// app.get("/",function(req, res){
//     res.sendFile("/index.html");
// });


app.post("/", function(req, res){
    console.log(req, body,num1);
var num1= Number(req.body.n1);
var num2= Number(req.body.n2);
var result= num1 + num2;
    res.send("The Result of the Calculator is" + result);
});

app.get("/", function(req, res){
    res.sendFile(__dirname +"/bmicalculator.html")
})
app.post("/bmicalculator", function(req, res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi=weight/(height*height);
    console.log(req.body);
    res.send("Your BMI is " + bmi);
})


app.listen(3000,function(){
    console.log("server started on port 3000");
});
