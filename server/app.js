import express from 'express';
import { connectDb } from './utils/features.js';
import dotenv from 'dotenv';

dotenv.config({
    path:"./.env"
});

const mongoURI =process.env.MONGO_URI;
const port = process.env.PORT || 3000 
connectDb(mongoURI)

const app=express();

//Using middlewares here 
app.use(express.json()); //to access raw data



//app.use("/user",userRoute);

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})