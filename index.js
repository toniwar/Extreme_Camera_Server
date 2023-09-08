const express = require("express");
const app = express();
require("dotenv").config();
const port =  process.env.PORT || 8000;
const {readdirSync} = require("fs");
readdirSync("./routes").map((file)=>app.use("/", require("./routes/"+file)));
app.get('/', (req, res)=>{
    res.send('Any response');
});
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});