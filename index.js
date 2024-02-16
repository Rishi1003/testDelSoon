const express = require("express");
const jwt = require('jsonwebtoken');


const app = express();


app.get("/",(req,res)=>{
    console.log("hits");
    const token = jwt.sign("safd", "hellosecrestsfd");
    res.send(`${token}`);
});

app.post("/",(req,res)=>{
    console.log(req.body.token);
    res.send("ok")
});

app.listen(3000,()=>{
    console.log("on 3000");
})