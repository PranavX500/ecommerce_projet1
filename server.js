const express=require("express");
const app=express();
const PORT=process.env.PORT||5000;
const connect =require("./Database/db");
require("dotenv").config({ path: "./config/.env" });






connect();
app.use(express.json())


app.listen(PORT,()=>{
    console.log(`${PORT}`)
})