require("dotenv").config();
const mongoose=require("mongoose");
const connected=()=>{
    const DB_URL=process.env.DB_URL
    mongoose.connect(DB_URL)
    .then(()=>{
        console.log("connected");
    })
    .catch(()=>{
        console.log("not connected");
    })
}
module.exports=connected;