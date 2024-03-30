import express from "express";
import { addCVData, getCVData } from "../controllers/cv.js";

const router = express.Router()

 router.post("/addCVData", addCVData)
 router.get("/getCVData", getCVData)



export default router