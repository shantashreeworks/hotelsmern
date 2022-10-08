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

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/hotels", hotelsRoute)



app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend with express");
})