require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoute");
app.use("/api",userRoutes)

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("Hi,you done it"))
.catch(err=>console.log(err));


app.get("/", (req,res) =>{
    console.log("backend is running")
})


app.listen(5000,() => {
    console.log("Server working")
})