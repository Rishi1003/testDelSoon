const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require('jsonwebtoken');
// const cors = require("cors")
// const CORSMiddleware = require("./CORS.js")

const app = express();

// app.use(CORSMiddleware);
// app.use(cors());

app.use(cookieParser());

app.get("/",(req,res)=>{
    console.log("hits");
    console.log(req.headers);
    res.cookie("terst","sfdafsd",{
        httpOnly: false,
        sameSite:"None",
    })
    res.send("200");
});

app.post("/",(req,res)=>{
    console.log(req.cookies);
    res.send("ok")
});

app.listen(3000,()=>{
    console.log("on 3000");
})