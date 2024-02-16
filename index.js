const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require('jsonwebtoken');


const app = express();

app.use(cookieParser());

app.get("/",(req,res)=>{
    console.log("hits");
    const token = jwt.sign("safd", "hellosecrestsfd");
    res.send(`${token}`);
});

app.post("/",(req,res)=>{
    console.log(req.cookies);
    res.send("ok")
});

app.listen(3000,()=>{
    console.log("on 3000");
})