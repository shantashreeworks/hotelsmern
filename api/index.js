import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//----------------------------------------------------------
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
//---------------------------------------------------------


const app = express()
dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongo DB");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("connected", ()=>{
    console.log("Connected to backend with MONGO DB");
})

mongoose.connection.on("disconnected", ()=>{
    console.log("Disconnected from MONGO DB, but connected to backend");
})


app.get("/", (req,res) =>{
    res.send("Hello from request respopnse")
})  


app.get("/users", (req,res) =>{
    res.send("Hello from request respopnse - by users")
})  


app.use("/auth", authRoute)


app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend with express");
})