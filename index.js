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
});

app.post("/",(req,res)=>{
    console.log(req.cookies);
    res.send("ok")
});

app.listen(3000,()=>{
    console.log("on 3000");
})