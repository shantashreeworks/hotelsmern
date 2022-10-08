import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js";
import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js";


const router = express.Router()

// CREATE --------------------------------------------------------------------------------------------------
router.post("/", createHotel)

// UPDATE --------------------------------------------------------------------------------------------------
router.put("/:id", updateHotel)

// DELETE --------------------------------------------------------------------------------------------------
router.delete("/:id", deleteHotel)

// READ - GET --------------------------------------------------------------------------------------------------
router.get("/:id", getHotel)

// READ - GET ALL --------------------------------------------------------------------------------------------------
router.get("/", getHotels)

export default router;