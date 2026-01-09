import express from 'express'
import dbConnect from './config/database.js';

const app = express();

dbConnect()

app.get('/',(req,res)=>{
    res.send("homepage")
})

app.listen(3000,()=>{
    console.log("Server is running")
})