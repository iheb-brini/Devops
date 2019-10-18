const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/home",(req,res)=>{
    res.json({"text":"hello world"});
})

app.listen(8080,()=>{
    console.log("server running ...");
    
})
