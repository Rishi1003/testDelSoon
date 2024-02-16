const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get("/",(req,res)=>{
    console.log("hits");

    res.cookie('username', 'johnDoe',
    {
        httpOnly: true,
    });
    res.send("ok")
});

app.post("/",(req,res)=>{
    console.log(req.cookies);
    res.send("ok")
});

app.listen(3000,()=>{
    console.log("on 3000");
})