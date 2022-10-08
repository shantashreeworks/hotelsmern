import express from "express";

const router = express.Router()

router.get("/", (req, res) =>{
    res.send("Help from Auth end point")
});


export default router;