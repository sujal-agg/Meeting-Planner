import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app=express();

mongoose
    .connect(
        `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.qhk2alf.mongodb.net/?retryWrites=true&w=majority`
    ).then(()=>
        app.listen(5000,()=>
            console.log("Connected to Database and Server is Running")
        )
    )
    .catch((e)=>(console.log(e)));