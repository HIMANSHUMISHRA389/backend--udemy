const express = require("express");
const bodyParser = require("body-parser");
const  adminRoutes=require("./routes/admin")
const shopRoutes=require("./routes/shop")
const path=require("path");

const rootDir=require("./util/path.js")
const app = express();



//All Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));




app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"));
})


app.listen(3000,(req,res)=>{
    console.log("Server is started at port 3000")
})

