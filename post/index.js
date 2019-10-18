const express = require("express");
const cors = require("cors");
const app = express();
const main = require("./main");

app.use(cors());

app.get("/post",(req,res)=>{
    res.json({"age":22});
})

app.listen(8081,()=>{
    console.log("server running ...");
    main.classifyAll;    
})
